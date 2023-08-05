# PrimeAPIClient
[Cisco Prime Infrastructure API](https://developer.cisco.com/site/prime-infrastructure/documents/api-reference/rest-api-v3-0/ "Cisco Prime Infrastructure API")<br />
[REST API Resources](https://developer.cisco.com/site/prime-infrastructure/documents/api-reference/rest-api-v3-3/ "REST API Resources")

---

![PyPI - Status](https://img.shields.io/pypi/status/PrimeAPIClient)
![PyPI - Format](https://img.shields.io/pypi/format/PrimeAPIClient)
![GitHub](https://img.shields.io/github/license/vsantiago113/PrimeAPIClient)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/vsantiago113/PrimeAPIClient)
![PyPI - Python Version](https://img.shields.io/pypi/pyversions/PrimeAPIClient)

An API Client for Prime to be able to easily use the API in a more standard way.

## How to install
```ignorelang
$ pip install PrimeAPIClient
```

## Usage
the argument "method" must be specify every time. Look at authentication validation for an example.

#### Default arguments and attributes
```python
import PrimeAPIClient

client = PrimeAPIClient.Client(verify=False, warnings=False, api_version='v1')

client.get(url=None, method='', data=None, auth = None)

# client.headers
# client.url_base
# client.token

```

#### The first query
```python
import PrimeAPIClient
import json

client = PrimeAPIClient.Client()
client.connect(url='https://Prime-server.local', username='admin', password='Admin123')

response = client.get(method='/data/Alarms.json')
print(json.dumps(response.json(), indent=4))

client.disconnect()
```

#### Getting detailed information
```python
import PrimeAPIClient
import json

client = PrimeAPIClient.Client()
client.connect(url='https://Prime-server.local', username='admin', password='Admin123')

query_string = {'.full': 'true'}
response = client.get(method='/data/Alarms.json', **query_string)
print(json.dumps(response.json(), indent=4))

client.disconnect()
```

#### Sorting
```python
import PrimeAPIClient
import json

client = PrimeAPIClient.Client()
client.connect(url='https://Prime-server.local', username='admin', password='Admin123')

query_string = {'.full': 'true', '.sort': 'severity'}
response = client.get(method='/data/Alarms.json', **query_string)
print(json.dumps(response.json(), indent=4))

client.disconnect()
```

#### Filtering
```python
import PrimeAPIClient
import json

client = PrimeAPIClient.Client()
client.connect(url='https://Prime-server.local', username='admin', password='Admin123')

query_string = {'.full': 'true', '.sort': 'severity', 'category.value': 'AP',
                    'message': 'contains("interface")'}
response = client.get(method='/data/Alarms.json', **query_string)
print(json.dumps(response.json(), indent=4))

client.disconnect()
```

#### Paging
```python
import PrimeAPIClient
import json

client = PrimeAPIClient.Client()
client.connect(url='https://Prime-server.local', username='admin', password='Admin123')

query_string = {'.full': 'true', '.sort': 'severity', 'category.value': 'AP',
                    'message': 'contains("interface")', '.maxResults': '5'}
response = client.get(method='/data/Alarms.json', **query_string)
print(json.dumps(response.json(), indent=4))

client.disconnect()
```
