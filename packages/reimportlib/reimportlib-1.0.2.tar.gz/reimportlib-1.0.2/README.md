# reimportlib: refactored imports

reimportlib is used to help with refactored old code
where the imports were moved out, but you still wish
to get legacy packages/classes to work, because you
had serialized them at a point in time but they aren't
available today.

## Main Features

* Very compact
* Few Dependencies

## Usage

```python
    import reimportlib
    __import__ = reimportlib.import_

    reimportlib.configure() # Reads mappings in .reimport.json
    reimportlib.remap('foo.bar.', 'examples.foo.') # Notice the . at the end
    
    print(reimportlib.get_remapped_name('foo.bar.C')) # 'examples.foo.C'

    print(reimportlib.import_module('foo.bar.B'))
    print(reimportlib.import_from('foo.bar.D', 'c'))
    reimportlib.instantiate('foo.bar.D', 'Foo', *[4], val=True)
```

And then it should automatically be able to import or instantiate
the new classes as required. Do check the provided test.py with
this distribution.
