# World Time Wrapper

This package provides an easy interface with the [World Time API](http://worldtimeapi.org/) site. 

### To install:

```python
python3 -m pip install world-time-api
```
This requires the requests module if you don't already have it installed. 

### Usage

To start, create a client for one of the endpoints (currently they only offer 'ip' and 'timezone' endpoints). The below example returns the time in New York.
```python
from WorldTimeAPI import services as serv

myclient = serv.client('timezone')
requests = {"area":"America","location":"New_York"}

# Returns a DateTimeJSON object
response = myclient.get(**requests)

print(response.datetime)
```

To get a list of regions and locations:

```python
# Returns ListJSON : NOTE: this is only valid for the 'timezone' endpoint
regions = myclient.regions()
print(regions.data)
```

