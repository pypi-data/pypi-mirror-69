# JSON-Secrets
Load your secrets (API keys etc.) from a JSON file.

Want to support the development financially? Donations are always welcomed! 
<a href="https://liberapay.com/marcoEDU/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a>

## Installation
```
pip install jsonsecrets
```

## Usage
```
from jsonsecrets import Secret

password = Secret(target='example_api.user.password',file_path='mysecrets.json').value
```