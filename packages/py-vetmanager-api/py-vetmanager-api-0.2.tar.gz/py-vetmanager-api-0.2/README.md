# py-vetmanager-api

![Build Status](https://github.com/otis22/PyVetmanagerApi/workflows/Python%20package/badge.svg)

Python library for work with vetmanager api

[Vetmanager](https://vetmanager.ru) - CRM for veterinary business. 

All CRM account has unique domain name, url address may be:

* {$domainName}.vetmanager.ru
* {$domainName}.vetmanager.cloud
* git s...

# Examples

```
# For get full url by domain name
from vetmanager.functions import url

clinic_url = url('mydomain')
print(clinic_url)
```

```

# For get auth token
from vetmanager.functions import url, token, token_credentials

try:
    user_token = token(
        url(domain='domain'),
        token_credentials(
            login='test',
            password='test',
            app_name='test'
        )
    )
    print(user_token)
except Exception as err: 
    print(err)
```

```
#For work with dev enviroments

from .url import Url, Protocol
from .host import HostGatewayUrl, BillingApiUrl
from .host import HostNameFromHostGateway, Domain
from .token import Token, Credentials
from .token import Login, Password, AppName

try: 
    clinic_url = Url(
        Protocol('https'),
        HostNameFromHostGateway(
            HostGatewayUrl(
                BillingApiUrl("https://billing-api-test.kube-dev.vetmanager.cloud/"),
                Domain(domain)
            )
        )
    )
    
    credentials = Credentials(
        Login('login'),
        Password('password'),
        AppName('app_name')
    )
    
    token_url = Token(
        clinic_url,
        credentials
    )
except Exception as e:
    print(e)
```

# For contributor

## Check codestyle

```
flake8 vetmanager --count --show-source --statistics && flake8 tests --count --show-source --statistics
```

## Run tests

```pytest --cov=vetmanager --cov-fail-under 90 tests/```

## For publish package

```
python setup.py sdist
twine upload --skip-existing dist/* -r testpypi
twine upload --skip-existing dist/*
```