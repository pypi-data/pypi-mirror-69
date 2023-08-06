## What's it?
It is a simple data loader with storage and filtering functionality for official UzAuto dealers.
## Basic use case
```python
from uzautoprom import InMemoryDB, SLoader, CField


db = InMemoryDB(
  SLoader("login", "password").contracts()
)

spark_contracts = db.contracts(
  CField("Модель", "SPARK")
)
print(spark_contracts)
```
## Special requirements
If you will use built-in loader(SLoader), you will download [geckodriver](https://github.com/mozilla/geckodriver/releases/tag/v0.26.0) and add them to PATH.
## About
uzautoprom produce 3 abstract classes: [Field](https://github.com/IlhomBahoraliev/uzautoprom/blob/master/uzautoprom/abc/field.py), [Database](https://github.com/IlhomBahoraliev/uzautoprom/blob/master/uzautoprom/abc/database.py) and [Loader](https://github.com/IlhomBahoraliev/uzautoprom/blob/master/uzautoprom/abc/loader.py). 
### By default:
- Loader - will work with network and dump contracts.
- Database - will storage and filter contracts.
- Field - contract field, created for flexible filtering.
### Built-in classes:
- SLoader(Loader) - use selenium and xlrd for xlsx file dumping from dealer.uzavtosanoat.uz and convert it.
- CField(Field) - simple implementation of Field abc.
- InMemoryDB(Database) - simple in memory database. 
## Install
```bash
pip install uzautoprom
```
