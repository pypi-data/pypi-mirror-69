# HTTP Request Methods

HTTP verbs that python core's HTTP parser supports.

This module provides an export that is just like
[HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods) from Developer Mozilla, with the following differences:

  * All method names are lower-cased.
  * All method names are upper-cased.

# HTTP Status Codes

Also this module provides a list with all 
[HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status) and you can get only status description by status code or get all status.

We use the methods package from [Node.js](https://www.npmjs.com/package/methods) as inspiration

## Install
Install and update using [Pip](https://pypi.org/):

```sh
$ pip install httpmethods
```

## API

```python
import httpmethods as methods
```


### A Simple Example
```python
from httpmethods import get_http_methods

for method in get_http_methods():
    print(method)
```
```
$ get
$ post
$ put
$ delete
$ ...
```

```python
from httpmethods import get_http_methods

for _method in get_http_methods(uppercase=True):
    print(_method)
```
```
$ GET
$ POST
$ PUT
$ DELETE
$ ...
```

```python
from httpmethods import get_status_codes, get_status_by_code

print(get_status_by_code(200))
print(get_status_by_code(401))
print(get_status_codes())
```
```
$ 200 OK
$ 401 Unauthorized
$ {
$   100: "100 Continue",
$   101: "101 Switching Protocols",
$   103: "103 Early Hints",
$   ...
$ }
```
## License

[MIT](LICENSE)