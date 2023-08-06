# django-payments-portmone

A [django-payments](https://github.com/mirumee/django-payments) backend for the [Portmone](https://www.portmone.com.ua/) payment gateway ([Reference documentation](https://docs.portmone.com.ua/docs/en/PaymentGatewayEng/))


[![Python Version](https://img.shields.io/badge/python-3.8-blue)](https://www.python.org/)
[![wemake-python-styleguide](https://img.shields.io/badge/style-wemake-000000.svg)](https://github.com/wemake-services/wemake-python-styleguide)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![wemake.services](https://img.shields.io/badge/%20-wemake.services-green.svg?label=%20&logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC%2FxhBQAAAAFzUkdCAK7OHOkAAAAbUExURQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP%2F%2F%2F5TvxDIAAAAIdFJOUwAjRA8xXANAL%2Bv0SAAAADNJREFUGNNjYCAIOJjRBdBFWMkVQeGzcHAwksJnAPPZGOGAASzPzAEHEGVsLExQwE7YswCb7AFZSF3bbAAAAABJRU5ErkJggg%3D%3D)](https://wemake.services)


## Install

    pip install django-payments-portmone

## Parameters

* payee_id (required): ID of the payee company.
* login (required): Your company login in the Portmone.com system.
* password (required): Your company password in the Portmone.com system.
* currency (default:'UAH'): possible values - UAH, USD, EUR, GBP, BYN, KZT, RUB
* endpoint (default:'https://www.portmone.com.ua/gateway/'): desired endpoint.
* prefix (default:''): Prefix of Portmone order number "{prefix}{payment.pk}".

settings.py
----------

```python
PAYMENT_VARIANTS = {
    'portmone': ('payments_portmone.PortmoneProvider', {
        'payee_id': '1185',
        'login': 'WDISHOP',
        'password': 'wdi451',
        'endpoint': 'https://www.portmone.com.ua/gateway/',
        'prefix': 'P000-'}
    ),
}
```

## Requirements

- `python3.6`
- `django` with version `1.11`
- `django-payments` with version `0.13`


## Development

When developing locally, we use:

- [`editorconfig`](http://editorconfig.org/) plugin (**required**)
- [`pipenv`](https://github.com/pypa/pipenv) (**required**)
- `pycharm 2020+`


Copyright (C) 2020 Onufrienko Vyacheslav
