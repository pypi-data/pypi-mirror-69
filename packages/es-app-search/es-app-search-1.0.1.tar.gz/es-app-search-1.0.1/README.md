# esclient

Elastic App Search API Client

### Installation
`pip install es-app-search`

### Usage

```python
from es_app_search import ESClient

endpoint = 'app-search-api-endpoint'
key = 'private-key'

c = ESClient(endpoint, key)
```

##### Search
```python
c.search('engine-name', 'sunny')
```

##### Create a synonym
```python
c.create_synonym('engine-name', ['hi', 'hello', 'hiya'])
```

##### List all synonyms
```python
c.get_synonyms('engine-name')
```
