#
#
# Don't edit it, unless this is I_n_t_6_4_S_e_t header
#
# run sh all_from_XXX.sh to create it from bluepring - I_n_t_6_4_S_e_t

include "init_int32set.pxi"
cdef extern from *:

    ctypedef struct kh_int32set_t:
        khint_t n_buckets, size, n_occupied, upper_bound
        uint32_t *flags
        int32_t *keys
        #size_t *vals  //dummy

    kh_int32set_t* kh_init_int32set() nogil
    void kh_destroy_int32set(kh_int32set_t*) nogil
    void kh_clear_int32set(kh_int32set_t*) nogil
    khint_t kh_get_int32set(kh_int32set_t*, int32_t) nogil
    void kh_resize_int32set(kh_int32set_t*, khint_t) nogil
    khint_t kh_put_int32set(kh_int32set_t*, int32_t, int*) nogil
    void kh_del_int32set(kh_int32set_t*, khint_t) nogil

    #specializing "kh_exist"-macro 
    bint kh_exist_int32set "kh_exist" (kh_int32set_t*, khint_t) nogil


cdef class Int32Set:
    cdef kh_int32set_t *table

    cdef bint contains(self, int32_t key) except *
    cdef Int32SetIterator get_iter(self)
    cdef khint_t size(self) 
    cpdef void add(self, int32_t key) except *
    cpdef void discard(self, int32_t key) except *
    


cdef class Int32SetIterator:
    cdef khint_t   it
    cdef khint_t   size
    cdef Int32Set  parent

    cdef bint has_next(self) except *
    cdef int32_t next(self) except *
    cdef void __move(self) except *

cpdef Int32Set_from_buffer(int32_t[:] buf, double size_hint=*)

