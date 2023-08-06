# README #

This README would normally document whatever steps are necessary to get your application up and running.

### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration
* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact

### Example ###
#### Install ####
```
pip install tpclientpy
```   
for Jupyter Notebook   
```
%pip install tpclientpy
```

#### Code ####
```
import tpclientpy

client = tpclientpy.TradePatioClient(
    api_key="API_KEY",
    api_secret="API_SECRET",
    host="YOUR_HOST",
)

exchanges = client.get_exchanges()
print(exchanges) # {'exchanges': ['bittrex.com', 'hitbtc.com']}

pairs = client.get_exchange_pairs("bittrex.com")
print(pairs) # {'exchangePairs': ['USDT-ONT', 'BTC-QNT', 'USDT-LOON']}

candles = client.get_exchange_candles(
    exchange="bittrex.com",
    pair="USDT-BTC",
    time_frame="5", # in minutes
    period="360",   # in seconds
    unlimited=True,
)
print(candles)
# {
#   'candles': [[
#       '2020-05-25T21:35:00Z', # date
#       8866.359132,            # open
#       8879.99199998,          # high
#       8866.359132,            # low
#       8870.11850556,          # close
#       0.0836392,              # volume
#   ]]
# }
```

### Deploy ###
```
source venv/bin/activate
python setup.py sdist
twine upload dist/*
deactivate
```
