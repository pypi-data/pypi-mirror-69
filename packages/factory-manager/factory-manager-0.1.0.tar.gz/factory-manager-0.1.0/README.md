# Factory manager

`factory-manager` is a python package to create objects with their dependencies
from descriptions in the form of a dictionary.

## Example usage

Given the following hierarchy of Vehicles with and without a motor:

```python
>>> import abc
>>>
>>> class Vehicle(metaclass=abc.ABCMeta):
...     def __init__(self):
...         pass
...     @abc.abstractmethod
...     def getVehicleType(self):
...         pass
...
>>> class Bicycle(Vehicle):
...     name = 'bicycle'
...     def getVehicleType(self):
...         return 'Bicycle'
...
>>> class Engine(metaclass=abc.ABCMeta):
...     def __init__(self):
...         self.engine_type = self.name
...     def getEngineType(self):
...         return self.engine_type
...
>>> class GasolineEngine(Engine):
...     name = 'gasoline'
...
>>> class ElectroEngine(Engine):
...     name = 'electro'
...
>>> class DieselEngine(Engine):
...     name = 'diesel'
...
>>> class MotorizedVehicle(Vehicle):
...     def __init__(self, engine: Engine, registered_drivers:set = None):
...         self.engine = engine
...         if registered_drivers is None:
...             self.registered_drivers = set()
...         else:
...             self.registered_drivers = registered_drivers
...
>>> class Car(MotorizedVehicle):
...     name = 'car'
...     def getVehicleType(self):
...         return 'Car' + ' with ' + self.engine.getEngineType() + ' engine'
...
>>> class Motorbike(MotorizedVehicle):
...     name = 'motorbike'
...     def getVehicleType(self):
...         return 'Motorbike' + ' with ' + self.engine.getEngineType() + ' engine'
```

We can now use a `FactoryManager` to create a factory for vehicles:  

```python
>>> from factory_manager import FactoryManager
>>> my_factories = FactoryManager()
>>> my_factories.add_object_hierarchy("vehicle", Vehicle)
```

The `FactoryManager` searches for subclasses of the given class (`Vehicle`) and
uses the existence of the class attribute `name` as an indicator that the subclass should be a type of a vehicle that the factory provides.
In the given example `my_factories` can be used to create bicycles, cars and motorbikes.

A bicycle can be instantiated as follows (either by using the bass class or the name given to `add_object_hierarchy` to select the factory):

```python
>>> my_factories.create_from_cls(Vehicle, {'type': 'bicycle'}).getVehicleType()
'Bicycle'
>>> my_factories.create_from_name('vehicle', {'type': 'bicycle'}).getVehicleType()
'Bicycle'
```

When creating a car, an engine has to be provided:

```python
>>> my_factories.create_from_name('vehicle', {'type': 'car'}).getVehicleType()
Traceback <...>
ValueError: Missing options [engine] for vehicle of type car
>>> my_factories.create_from_name('vehicle', {'type': 'car', 'options': {
...     'engine': ElectroEngine()}}).getVehicleType()
'Car with electro engine'
```

Now we can also register `Engine` with the `FactoryManager`:

```python
>>> my_factories.add_object_hierarchy("engine", Engine)
```

This allows us to create an engine similar to vehicle:


```python
>>> my_factories.create_from_name('engine', {'type': 'electro'}).getEngineType()
'electro'
```

But it also allows us to create a vehicle and an engine in one step as `my_factories` knows from the type hint that a motorized vehicle needs an engine:

```python
>>> my_factories.create_from_name('vehicle', {'type': 'car', 'options': {
...     'engine': {'type': 'electro'}}}).getVehicleType()
'Car with electro engine'
```

`registered_drivers` does not need to be provided as it has a default value.
But it can be provided:

```python
>>> my_factories.create_from_name('vehicle', {'type': 'car', 'options': {
...     'engine': {'type': 'electro'}}}).registered_drivers
set()
>>> sorted(
...     my_factories.create_from_name('vehicle', {'type': 'car', 'options': {
...         'engine': {'type': 'electro'},
...         'registered_drivers': set(['driver1', 'driver2'])
...     }}).registered_drivers)
['driver1', 'driver2']
```

There is no type checking, so the value for `registered_drivers` does not have to be a `set`:

```python
>>> my_factories.create_from_name('vehicle', {'type': 'car', 'options': {
...    'engine': {'type': 'electro'},
...    'registered_drivers': ['driver1', 'driver2', 'driver1']
... }}).registered_drivers
['driver1', 'driver2', 'driver1']
```

However, we can register a factory method for the type `set`.
Now, the factory for `Vehicle` will call this factory for the provided
attribute if it is not already a `set`:

```python
>>> my_factories.add_factory_method(set, lambda s: set(s))
```

```python
>>> sorted(
...     my_factories.create_from_name('vehicle', {'type': 'car', 'options': {
...         'engine': {'type': 'electro'},
...         'registered_drivers': ['driver1', 'driver2', 'driver1']
...     }}).registered_drivers)
['driver1', 'driver2']
```

This is useful if the dictionary used to instantiate the object comes
from json data.
