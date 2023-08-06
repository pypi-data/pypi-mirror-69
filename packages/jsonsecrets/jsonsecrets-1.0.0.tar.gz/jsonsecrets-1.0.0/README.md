# JSON-Secrets
Load your secrets (API keys etc.) from a JSON file.

Want to support the development financially? Donations are always welcomed! 
[Click here to donate on Liberapay](https://liberapay.com/marcoEDU)

[<img src="http://img.shields.io/liberapay/receives/marcoEDU.svg?logo=liberapay">](https://liberapay.com/marcoEDU)

## Installation
```
pip install jsonsecrets
```

## Example
```
from jsonsecrets import Secret

password = Secret(target='example_api.user.password',file_path='mysecrets.json').value
```