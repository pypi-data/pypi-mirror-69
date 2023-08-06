# nfiparcel

Python package for parcel analysis and rating.


## features


- contract definitions
  - zoning
  - rates
- safe-guard functions
  - use [python-fedex](https://github.com/python-fedex-devs/python-fedex) if does not exist
  - override with python-fedex for lanes
  - [python-fedex](https://github.com/python-fedex-devs/python-fedex) usa-all


## python package development


### shipments.csv

origin_zip  |  dest_zip  |  weight
------------|------------|---------|
07981       |   19106    |  10.2   |
19106       |   07981    |  5.6    |


### zones.csv

*ziprange*: destination zip 3 or 5-digit.

*filename*: origin zip 5-digit. 


ziprange    |  zipzone |  filename
------------|----------|--------------|
716-725     |   7      |  99400-99499 |
72611-72752 |   6      |  99400-99499 |


### groundrates.csv

weight  | zones |       |       |
--------|-------|-------|-------|
lbs.    |   2   |   3   |   4   |
1.0     | $7.37 | $7.37 | $7.37 | 
2.0     | $7.37 | $7.37 | $7.37 |
3.0     | $7.37 | $7.37 | $7.37 |


### python script

```python
from nfiparcel import RateHelper

rh = RateHelper(zones='zones.csv', groundrates='groundrates.csv')
df = rh.ratecsv('shipments.csv')
```