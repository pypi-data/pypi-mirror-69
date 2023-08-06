cdef extern from *:
    """
    //khash has nothing predefined for Pyobject
    #include <Python.h>

    typedef PyObject* pyobject_t;
    typedef pyobject_t khpyobject_t;


    inline int pyobject_cmp(PyObject* a, PyObject* b) {
	    int result = PyObject_RichCompareBool(a, b, Py_EQ);
	    if (result < 0) {
		    PyErr_Clear();
		    return 0;
	    }
        if (result == 0) {  // still could be two NaNs
            return PyFloat_CheckExact(a) &&
                   PyFloat_CheckExact(b) &&
                   Py_IS_NAN(PyFloat_AS_DOUBLE(a)) &&
                   Py_IS_NAN(PyFloat_AS_DOUBLE(b));
        }
	    return result;
    }

    inline khint32_t pyobject_hash(PyObject* key){
        khint64_t hash = PyObject_Hash(key);
        return (khint32_t) ((hash)>>33^(hash)^(hash)<<11);
    }

    // For PyObject_Hash holds:
    //    hash(0.0) == 0 == hash(-0.0)
    //    hash(X) == 0 if X is a NaN-value
    // so it is OK to use it directly
    
    #define kh_pyobject_hash_func(key) (pyobject_hash(key))
    #define kh_pyobject_hash_equal(a, b) (pyobject_cmp(a, b))
    """
    pass
