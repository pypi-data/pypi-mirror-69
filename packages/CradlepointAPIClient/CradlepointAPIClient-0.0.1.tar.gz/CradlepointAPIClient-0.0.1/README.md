# CradlepointAPIClient
[NetCloud API](https://developer.cradlepoint.com/ "NetCloud API")

---

![PyPI - Status](https://img.shields.io/pypi/status/CradlepointAPIClient)
![PyPI - Format](https://img.shields.io/pypi/format/CradlepointAPIClient)
![GitHub](https://img.shields.io/github/license/vsantiago113/CradlepointAPIClient)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/vsantiago113/CradlepointAPIClient)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/CradlepointAPIClient)

An API Client for Cradlepoint to be able to easily use the API in a more standard way.

## How to install
```ignorelang
$ pip install CradlepointAPIClient
```

## Usage
the argument "method" must be specify every time.

#### Default arguments and attributes
```python
import CradlepointAPIClient

client = CradlepointAPIClient.Client(api_version='v2', verify=True)

client.get(method='', data=None)

# client.headers
# client.url_base

```

#### The first query
```python
import CradlepointAPIClient
import json

client = CradlepointAPIClient.Client(api_version='v2', verify=True)
client.connect(x_cp_api_id='', x_cp_api_key='', x_ecm_api_id='', x_ecm_api_key='')

response = client.get(method='/groups')
print(json.dumps(response.json(), indent=4))

client.disconnect()
```

#### Paging
```python
import CradlepointAPIClient
import json

client = CradlepointAPIClient.Client(api_version='v2', verify=True)
client.connect(x_cp_api_id='', x_cp_api_key='', x_ecm_api_id='', x_ecm_api_key='')

response = client.get(method='/groups', offset=0, limit=1)
print(json.dumps(response.json(), indent=4))

client.disconnect()
```

#### Fields
```python
import CradlepointAPIClient
import json

client = CradlepointAPIClient.Client(api_version='v2', verify=True)
client.connect(x_cp_api_id='', x_cp_api_key='', x_ecm_api_id='', x_ecm_api_key='')

response = client.get(method='/groups', offset=0, limit=1, fields='id,name')
print(json.dumps(response.json(), indent=4))

client.disconnect()
```

#### Filtering
```python
import CradlepointAPIClient
import json

client = CradlepointAPIClient.Client(api_version='v2', verify=True)
client.connect(x_cp_api_id='', x_cp_api_key='', x_ecm_api_id='', x_ecm_api_key='')

response = client.get(method='/groups', offset=0, limit=1, fields='id,name', name='test_group')
print(json.dumps(response.json(), indent=4))

client.disconnect()
```
