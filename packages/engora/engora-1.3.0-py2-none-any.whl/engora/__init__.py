import pint
import requests
import json
import os
import time
import random
import copy
import sys
import getpass
#TODO add uncertainties

api_version = 'v0'
units = pint.UnitRegistry()

class Client():
    def __init__(self, token=None, url='https://engora.tech', cert_path=None):
        #TODO add config file option if token is none
        self.url = url
        self.cert_path = cert_path
        if token!=None:
            self.token = token
        else:
            self.get_token()
            if self.token == None:
                print("No token provided, and default token is not set.  Please run the following command to set a default token for this computer:  import engora; client = engora.Client(); client.create_and_save_token()")
        #self._header = {'token':token}
        self.data_sources = []

    def dataset(self, dataset_id, version=None):
        ds = Dataset(self.token, dataset_id, version=version, url=self.url, client=self, cert_path=self.cert_path)
        self.data_sources.append(ds)
        return ds

    def space(self, version=None, **kwargs):
        sp = Space(self.token, url=self.url, version=version, cert_path=self.cert_path, **kwargs)
        self.data_sources.append(sp)
        return sp

    def get_token(self):
        #attempt to open a config file in the user's home directory
        config = self.get_config()
        self.token = config.get('token', None)
    
    def set_config(self, config):
        home = os.path.expanduser('~')
        config_dir = os.path.join(home, '.engora')
        config_path = os.path.join(config_dir, 'config.json')
        if not os.path.exists(config_dir):
            os.makedirs(config_dir)
        with open(config_path, "w") as f:
            json.dump(config, f, indent=4, sort_keys=True)
        return True

    def get_config(self):
        home = os.path.expanduser('~')
        config_dir = os.path.join(home, '.engora')
        config_path = os.path.join(config_dir, 'config.json')
        if not os.path.exists(config_dir):
            os.makedirs(config_dir)
            with open(config_path, "w") as f:
                json.dump(dict(), f)
        with open(config_path, "r") as f:
            config = json.load(f)
        return config

    def create_and_save_token(self):
        print("Getting token")
        username = input("Username: ")
        password = getpass.getpass("Password: ")
        session = requests.session()
        data = {'username':username.strip(), 'password':password.strip()}
        if self.cert_path!=None:
            session.post('{}/login'.format(self.url), data = data, verify=self.cert_path)
        else:
            session.post('{}/login'.format(self.url), data = data)
        #TODO add better error messaging!
        #create a new user token
        if self.cert_path!=None:
            req = session.post('{}/api/{}/user/token'.format(self.url, api_version), verify=self.cert_path)
        else:
            req = session.post('{}/api/{}/user/token'.format(self.url, api_version))
        token = req.json()
        config = self.get_config()
        config['token'] = token
        self.set_config(config)
        self.get_token()
        print("Success!")

    def get_default_owner(self):
        config = self.get_config()
        return config.get('default_owner', None)
        
    def set_default_owner(self, owner_id):
        config = self.get_config()
        config['default_owner'] = owner_id
        self.set_config(config)

    def create_dataset(self, name, description, owner_id=None):
        #TODO finish this
        if owner_id == None:
            owner_id = self.get_default_owner()
        data = {'name':name, 'description': description, 'public_read': False, 'public_write': False}
        if self.cert_path!=None:
            r = requests.post('{}/api/{}/dataset'.format(self.url, api_version), data=data, headers={'token':self.token}, verify=self.cert_path)
        else:
            r = requests.post('{}/api/{}/dataset'.format(self.url, api_version), data=data, headers={'token':self.token})
        assert(r.status_code == 200)
        dataset_id = r.json()
        return self.dataset(dataset_id)

    def find_or_create(self, name, description=None, owner=None):
        if owner == None:
            owner = self.get_default_owner()
        data = {'name':name, 'description':description, 'owner':owner}
        if description != None:
            data['description'] = description
        if self.cert_path!=None:
            r = requests.put('{}/api/{}/dataset/find_or_create'.format(self.url, api_version), json=data, headers={'token':self.token}, verify=self.cert_path)
        else:
            r = requests.put('{}/api/{}/dataset/find_or_create'.format(self.url, api_version), json=data, headers={'token':self.token})
        assert(r.status_code == 200)
        dataset_ids = r.json()
        if len(dataset_ids)>1:
            print("Warning: multiple matching datasets found!")
        return self.dataset(dataset_ids[0])

    def find(self, name, description=None, owner=None):
        if owner == None:
            owner = self.get_default_owner()
        data = {'name':name, 'description':description, 'owner':owner}
        if description != None:
            data['description'] = description
        if self.cert_path!=None:
            r = requests.put('{}/api/{}/dataset/find_or_create'.format(self.url, api_version), json=data, headers={'token':self.token}, verify=self.cert_path)
        else:
            r = requests.put('{}/api/{}/dataset/find_or_create'.format(self.url, api_version), json=data, headers={'token':self.token})
        assert(r.status_code == 200)
        dataset_ids = r.json()
        if len(dataset_ids)>1:
            print("Warning: multiple matching datasets found!")
        if len(dataset_ids)==0:
            return None
        return self.dataset(dataset_ids[0])

    def serialize_data_sources(self):
        serializable = []
        for source in self.data_sources:
            if type(source) == Dataset:
                serializable.append({"type":"dataset", "version":source._version, "id":source.dataset_id, "name":source.name})
            elif type(source) == Space:
                serializable.append(source.serializable_space)
        return serializable


class Dataset():
    def __init__(self, token, dataset_id, version=None, url='', cert_path=None, client=None):
        self.token = token
        self.dataset_id = dataset_id
        self.url = url
        self.cert_path = cert_path
        self._version = version
        self.last_datum_id = 0
        self._buffer = []
        self._buffer_index = 0
        self._header = {'token':token}
        self._client = client
        self._pushed_data_sources = False
        self.fetch_data()

    def version(self, version=None):
        if version == None:
            if self._version == None:
                if self.cert_path!=None:
                    r = requests.get('{}/api/{}/dataset/{}/latest'.format(self.url, api_version, self.dataset_id), headers=self._header, verify=self.cert_path)
                else:
                    r = requests.get('{}/api/{}/dataset/{}/latest'.format(self.url, api_version, self.dataset_id), headers=self._header)
                self._version = r.json()
            return self._version
        else:
            self._version = version
    
    def __iter__(self):
        return self

    def __next__(self):
        if self._buffer_index>=len(self._buffer):
            if self.cert_path != None:
                r = requests.get('{}/api/{}/dataset/{}/version/{}/data/from/{}'.format(self.url, 
                                                                        api_version, 
                                                                        self.dataset_id,
                                                                        self.version(),
                                                                        self.last_datum_id), headers=self._header, verify=self.cert_path)
            else:
                r = requests.get('{}/api/{}/dataset/{}/version/{}/data/from/{}'.format(self.url, 
                                                        api_version, 
                                                        self.dataset_id,
                                                        self.version(),
                                                        self.last_datum_id), headers=self._header)
            data = r.json()
            if len(data)==0:
                raise(StopIteration)
            parsed_data = [self.unserialize_datum(d) for d in data]
            last_datum_id = max([d["id"] for d in data])
            self._buffer = parsed_data
            self.last_datum_id = last_datum_id
            self._buffer_index = 1
            return self._buffer[0]
        else:
            self._buffer_index = self._buffer_index+1
            return self._buffer[self._buffer_index-1]

    def fetch_data(self):
        if self.cert_path!=None:
            r = requests.get('{}/api/{}/dataset/{}'.format(self.url, 
                                                            api_version, 
                                                            self.dataset_id), headers=self._header, verify=self.cert_path)
        else:
            r = requests.get('{}/api/{}/dataset/{}'.format(self.url, 
                                                            api_version, 
                                                            self.dataset_id), headers=self._header)
        self._data = r.json()
        self.name = self._data["name"]
        self.description = self._data["description"]

    def unserialize_datum(self, datum):
        d = json.loads(datum["serialized_payload"])
        d = self.unserialize_rec(d)
        return d

    def unserialize_rec(self, datum):
        if type(datum) == list:
            for i, d in enumerate(datum):
                datum[i] = self.unserialize_rec(d)
        elif type(datum) == dict:
            if "_type" in datum:
                datum = units.Quantity.from_tuple(datum["serialized"])
            else:
                for k in datum.keys():
                    datum[k] = self.unserialize_rec(datum[k])
        return datum

    def add(self, datum):
        if self._version == None:
            v = str(int(time.time()*1000))+''.join(random.choice('ABCDEF') for _ in range(4))
            self.version(v)
        if self._pushed_data_sources == False:
            self.push_data_sources()
            self._pushed_data_sources = True
        serialized_payload = json.dumps(serialize_datum(datum))
        data = [{'serialized_payload':serialized_payload}]
        if self.cert_path!=None:
            r = requests.put('{}/api/{}/dataset/{}/version/{}/data'.format(self.url, api_version, self.dataset_id, self.version()), json=data, headers=self._header, verify=self.cert_path)
        else:
            r = requests.put('{}/api/{}/dataset/{}/version/{}/data'.format(self.url, api_version, self.dataset_id, self.version()), json=data, headers=self._header)
        ids = r.json()
        assert(len(ids)==1)
        #assert(r.status_code == 204) #TODO add better error handling

    def public_read(self, state=None):
        """Check whether the dataset is publicly readable.  If state is set, set the publicly readable status to state"""
        if state==None:
            if self.cert_path!=None:
                r = requests.get('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header, verify=self.cert_path)
            else:
                r = requests.get('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header)
            data = r.json()
            return data["public_read"]
        data = {"public_read":state}
        if self.cert_path!=None:
            r = requests.put('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header, json=data, verify=self.cert_path)
        else:
            r = requests.put('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header, json=data)
        assert(r.status_code == 204)

    def public_write(self, state=None):
        """Check whether the dataset is publicly readable.  If state is set, set the publicly readable status to state"""
        if state==None:
            if self.cert_path!=None:
                r = requests.get('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header, verify=self.cert_path)
            else:
                r = requests.get('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header)
            data = r.json()
            return data["public_write"]
        data = {"public_write":state}
        if self.cert_path!=None:
            r = requests.put('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header, json=data, verify=self.cert_path)
        else:
            r = requests.put('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header, json=data)
        assert(r.status_code == 204)

    def push_data_sources(self):
        ds = self._client.serialize_data_sources()
        data = {'sources':{'version':self.version(), 'sources':json.dumps(ds)}}
        if self.cert_path!=None:
            r = requests.put('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header, json=data, verify=self.cert_path)
        else:
            r = requests.put('{}/api/{}/dataset/{}'.format(self.url, api_version, self.dataset_id), headers=self._header, json=data)
        assert(r.status_code == 204)


class Space():
    def __init__(self, token, url='', cert_path=None, version=None, **kwargs):
        self.token = token
        self._header = {'token':token}
        if version==None:
            v = str(int(time.time()*1000))+''.join(random.choice('ABCDEF') for _ in range(4))
            self.version = v
            print("Version: {}".format(v))
        else:
            self.version = version
        self.url = url
        self.cert_path = cert_path
        self.expanded_dataset = dict()
        self.kwargs = kwargs
        self.sorted_keys = sorted(kwargs.keys())
        self.serializable_space = self.serialize_space()
        self.serialized_space = json.dumps(self.serializable_space, sort_keys=True)
        self.space_id = self.get_id()

    def get_id(self):
        data = {"definition":self.serialized_space, "version":self.version}
        if self.cert_path!=None:
            r = requests.put('{}/api/{}/space/find'.format(self.url, api_version), json=data, headers=self._header, verify=self.cert_path)
        else:
            r = requests.put('{}/api/{}/space/find'.format(self.url, api_version), json=data, headers=self._header)
        return r.json()["id"]

    def serialize_space(self):
        keys = self.sorted_keys
        space = dict()
        for key in keys:
            datum = self.kwargs[key]
            if type(datum) == Dataset:
                space[key] = {"type":"dataset", "id":datum.dataset_id, "version":datum.version(), "name":datum.name}
                self.expanded_dataset[key] = list(datum)
            elif type(datum) == list:
                space[key] = {"type":"list", "list":[serialize_datum(d) for d in datum]}
            elif type(datum) == Continuous:
                tmin = serialize_datum(datum.min)
                tmax = serialize_datum(datum.max)
                space[key] = {"type":"continuous", "min":tmin, "max":tmax}
            elif type(datum) == Discrete:
                tmin = serialize_datum(datum.min)
                tmax = serialize_datum(datum.max)
                space[key] = {"type":"discrete", "min":tmin, "max":tmax, "npts":datum.npts}
                self.expanded_dataset[key] = [datum.min+(datum.max-datum.min)*(float(i)/float(datum.npts-1)) for i in range(datum.npts)]
        return space

    def convert_sample_to_point(self, sample):
        out = dict()
        for i in range(0, len(sample)):
            val = sample[i]
            key = self.sorted_keys[i]
            source = self.serializable_space[key]
            if source["type"] == "dataset":
                l = self.expanded_dataset[key]
                index = int(len(l)*val)
                if index==len(l):
                    index = index-1
                out[key] = l[index]
            elif source["type"] == "list":
                l = source["list"]
                index = int(len(l)*val)
                if index==len(l):
                    index = index-1
                out[key] = l[index]
            elif source["type"] == "continuous":
                tmin = self.kwargs[key].min
                tmax = self.kwargs[key].max
                out[key] = tmin+val*(tmax-tmin)
            elif source["type"] == "discrete":
                l = self.expanded_dataset[key]
                index = int(len(l)*val)
                if index==len(l):
                    index = index-1
                out[key] = l[index]
        return out

    def get_sample(self):
        if self.cert_path!=None:
            r = requests.get('{}/api/{}/space/{}/sample'.format(self.url, 
                                                                api_version, 
                                                                self.space_id,
                                                                self.version), headers=self._header, verify=self.cert_path)
        else:
            r = requests.get('{}/api/{}/space/{}/sample'.format(self.url, 
                                                                api_version, 
                                                                self.space_id,
                                                                self.version), headers=self._header)
        sample = r.json()["sample"]
        return sample

    def __iter__(self):
        return self

    def __next__(self):
        sample = self.get_sample()
        point = self.convert_sample_to_point(sample)
        return point

class Continuous():
    def __init__(self, min=0.0, max=1.0):
        self.min = min
        self.max = max

class Discrete():
    def __init__(self, min=0.0, max=1.0, npts=2):
        self.min = min
        self.max = max
        self.npts = npts

def serialize_datum(datum):
    d = copy.deepcopy(datum)
    d = serialize_rec(d)
    return d

def serialize_rec(datum):
    if type(datum) == list:
        for i, d in enumerate(datum):
            datum[i] = serialize_rec(d)
    elif type(datum) == dict:
        for k in datum.keys():
            datum[k] = serialize_rec(datum[k])
    elif type(datum) == units.Quantity:
        serialized = datum.to_tuple()
        datum = datum.to_base_units()
        datum = {"_type":"units.Quantity", "value":datum.magnitude, "unit":str(datum.units), "serialized":serialized}
    return datum