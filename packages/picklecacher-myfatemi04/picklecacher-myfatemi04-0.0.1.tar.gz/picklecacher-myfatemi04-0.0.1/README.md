# picklecache
This program allows you to stop programs in the middle and pick up where you left off with `pickle` module.

# Documentation

## Class `picklecache.Picache`:
 - *directory*: The directory to store the cache files in.

### Usage:
 - Creation: `mycache = picklecache.Picache("./path/to/my/files")`
 - Cache a function: `@mycache(subgroup='', picache_key_gen=lambda args, kwargs: (tuple(args), tuple(kwargs.items())))`
 - This will decorate any function. By default, it uses the `args` and `kwargs` as keys.
 - When the function is decorated, you can pass `picache_key=...` to add your own caching key
 - This is useful if you have something like epochs in a Machine Learning model, and can't pass in a network as a key to the output

### What are subgroups?
 - Subgroups are added as a prefix to the key. They're just so you can use the same caching folder
   for multiple functions without key collisions.
 - Keys are stored as a tuple, (subgroup, picache_key), so keys only have to be distinct for a certain function.

~~~
mycache = picklecache.Picache("./path/to/my/files")
@mycache("MyFunction1")
def costly_function():
    time.sleep(1000)
    return 100


costly_function() # takes a long time
~~~

Reload the program.

~~~
costly_function() # instant
~~~

This time, the run is instant. Key is stored as ("MyFunction1", ((), ()))

You could also specify a custom picache_key if you wanted to.

Author: **Michael Fatemi**