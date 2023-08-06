# cykhash

cython wrapper for khash-sets/maps, efficient implementation of `isin` and `unique`

## About:

  * Brings functionality of khash (https://github.com/attractivechaos/klib/blob/master/khash.h) to Cython and can be used seamlessly in numpy or pandas.

  * Numpy's world is lacking the concept of a (hash-)set. This shortcoming is fixed and efficient (compared to pandas') `unique` and `isin` are implemented.

  * Python-set/dict have big memory-footprint. For some datatypes the overhead can be reduced by using khash.


## Dependencies:

To build the extension Cython>=0.28 and c-build tool chain are necessary.

See (https://github.com/realead/cykhash/blob/master/doc/README4DEVELOPER.md) for depenencies needed for development.

## Instalation:

To install latest realease:

    pip install cykhash

To install the most recent version of the module:

    pip install https://github.com/realead/cykhash/zipball/master


## Functionality overview

### Hash sets

`Int64Set`, `Int32Set`, `Float64Set`, `Float32Set`, and `PyObjectSet` are implemented. They aren't drop-in replacements of the Python-set and have only a basic interface. However, given the Cython-interface, efficient extensions of functionality are easily done.


Biggest advantage of these sets is that they need about 4 times less memory than the usual Python-sets and are somewhat faster for integers or floats.

The most efficient way to create such sets is to use `XXXXSet_from_buffer(...)`, e.g. `Int64Set_from_buffer`, if data container supports buffer protocol (e.g. numpy-arrays, `array.array` or `ctypes`-arrays). Or `XXXXSet_from(...)` for any iterator.


### Hash maps

`Int64to64Map`, `Int32to32Map`, `Float64to64Map`, `Float32to32Map`, and `PyObjectMap` are implemented. They aren't drop-in replacements of the Python-dictionaries and have only a basic interface. However, given the Cython-interface efficient extensions of functionality are easily done.

Biggest advantage of these sets is that they need about 4 times less memory than the usual Python-dictionaries and are somewhat faster for integers or floats.


### isin

  * implemented are `isin_int64`, `isin_int32`, `isin_float64`, `isin_float32`
  * using hash set instead of arrays in `isin` function has the advantage, that the look-up data structure doesn't have to be reconstructed for every call, thus reducing the running time from `O(n+m)`to `O(n)`, where `n` is the number of queries and `m`-number of elements in the look up array.
  * Thus cykash's `isin` can be order of magnitude faster than the numpy's or pandas' versions.

### unique

  * implemented are `unique_int64`, `unique_int32`, `unique_float64`, `unique_float32`
  * returns an object which implements the buffer protocol, so `np.ctypeslib.as_array` (recommended) or `np.frombuffer` (less safe, as memory can get reinterpreted) can be used to create numpy arrays.
  * differently as pandas, the returned uniques aren't in the order of the appearance. If order of appearence is important use `unique_stable_xxx`-versions, which needs somewhat more memory.
  * the signature is `unique_xxx(buffer, size_hint=0.0)` the initial memory-consumption of the hash-set will be `len(buffer)*size_hint` unless `size_hint<=0.0`, in this case it will be ensured, that no rehashing is needed even if all elements are unique in the buffer.

As pandas uses maps instead of sets internally for `unique`, it needs about 4 times more peak memory and is 1.6-3 times slower.


### Floating-point numbers as keys

There is a problem with floating-point sets or maps, i.e. `Float64Set`, `Float32Set`, `Float64to64Map` and `Float32to32Map`: The standard definition of "equal" and hash-function based on the bit representation don't define a meaningful or desired behavior for the hash set:

   * `NAN != NAN` and thus it is not equivalence relation
   * `-0.0 == 0.0` but `hash(-0.0)!=hash(0.0)`, but `x==y => hash(x)==hash(y)` is neccessary for set to work properly.

This problem is resolved through following special case handling:

   * `hash(-0.0):=hash(0.0)`
   * `hash(x):=hash(NAN)` for any not a number `x`.
   * `x is equal y <=> x==y || (x!=x && y!=y)`

A consequence of the above rule, that the equivalence classes of `{0.0, -0.0}` and `e{x | x is not a number}` have more than one element. In the set these classes are represented by the first seen element from the class.

The above holds also for `PyObjectSet` (this behavior is not the same as fro Python-`set` which shows a different behavior for nans).

### Examples:

#### Hash sets

Python: Creates a set from a numpy-array and looks up whether an element is in the resulting set:

        import numpy as np
        from cykhash import Int64Set_from_buffer       
        a =  np.arange(42, dtype=np.int64)
        my_set = Int64Set_from_buffer(a) # no reallocation will be needed
        assert 41 in my_set and 42 not in my_set

Python: Create a set from an iterable and looks up whether an element is in the resulting set:

        from cykhash import Int64Set_from
        my_set = Int64Set_from(range(42)) # no reallocation will be needed
        assert 41 in my_set and 42 not in my_set

Cython: Create a set and put some values into it:

        from cykhash.khashsets cimport Int64Set
        my_set = Int64Set(number_of_elements_hint=12)  # reserve place for at least 12 integers
        cdef Py_ssize_t i
        for i in range(12):
           my_set.add(i)    
        assert 11 in my_set and 12 not in my_set

#### Hash maps

Python: Creating `int64->float64` map using `Int64to64Map_from_float64_buffer`:

        import numpy as np
        from cykhash import Int64to64Map_from_float64_buffer
        keys = np.array([1, 2, 3, 4], dtype=np.int64)
        vals = np.array([5, 6, 7, 8], dtype=np.float64)
        my_map = Int64to64Map_from_float64_buffer(keys, vals) # there will be no reallocation
        assert my_map[4] == 8.0

Python: Creating `int64->int64` map from scratch:

        import numpy as np
        from cykhash import Int64to64Map
        # my_map will not need reallocation for at least 12 elements and
        # values are int64 (another possibility is for_int=False, meas for float64
        my_map = Int64to64Map(number_of_elements_hint=12, for_int=True)
        for i in range(12):
            my_map[i] = i+1
        assert my_map[5] == 6


#### isin

Python: Creating look-up data structure from a numpy-array, performing `isin`-query

        import numpy as np
        from cykhash import Int64Set_from_buffer, isin_int64
        a = np.arange(42, dtype=np.int64)
        lookup = Int64Set_from_buffer(a)

        b = np.arange(84, dtype=np.int64)
        result = np.empty(b.size, dtype=np.bool)

        isin_int64(b, lookup, result)    # running time O(b.size)
        assert np.sum(result.astype(np.int))==42


#### unique

Python: using `unique_int64`:

        import numpy as np
        from cykhash import unique_int64
        a = np.array([1,2,3,3,2,1], dtype=np.int64)
        u = np.ctypeslib.as_array(unique_int64(a)) # there will be no reallocation
        print(u) # [1,2,3] or any permutation of it

Python: using `unique_stable_int64`: 

        import numpy as np
        from cykhash import unique_stable_int64
        a = np.array([3,2,1,1,2,3], dtype=np.int64)
        u = np.ctypeslib.as_array(unique_stable_int64(a)) # there will be no reallocation
        print(u) # [3,2,1] 



## API

See (https://github.com/realead/cykhash/blob/master/doc/README_API.md) for a more detailed API description.

## Performance

See (https://github.com/realead/cykhash/blob/master/doc/README_PERFORMANCE.md) for results of performance tests.

## Trivia

* This project was inspired by the following stackoverflow question: https://stackoverflow.com/questions/50779617/pandas-pd-series-isin-performance-with-set-versus-array.

* pandas also uses `khash` (and thus was a source of inspiration), but wraps only maps and doesn't wrap sets. Thus, pandas' `unique` needs more memory as it should. Those maps are also never exposed, so there is no way to reuse the look-up structure for multiple calls to `isin`.

* `khash` is a good choice, but there are other alternatives, e.g. https://github.com/sparsehash/sparsehash. See also https://stackoverflow.com/questions/48129713/fastest-way-to-find-all-unique-elements-in-an-array-with-cython/48142655#48142655 for a comparison for different `unique` implementations.

* A similar approach for sets/maps in pure Cython: https://github.com/realead/tighthash, which is quite slower than khash.

* There is no dependency on `numpy`: this library uses buffer protocol, thus it works for `array.array`, `numpy.ndarray`, `ctypes`-arrays and anything else. However, some interface are somewhat cumbersome (which type should be created as answer?) and for convenient usage it might be a good idea to wrap the functionality so objects of right types are created.

## History:

#### Release 1.0.1 (27.05.2020):

  * released on PyPi

#### Older:

  * 0.4.0: uniques_stable, preparing for release
  * 0.3.0: PyObjectSet, Maps for Int64/32 and also Float64/32, unique-versions
  * 0.2.0: Int32Set, Float64Set, Float32Set
  * 0.1.0: Int64Set

