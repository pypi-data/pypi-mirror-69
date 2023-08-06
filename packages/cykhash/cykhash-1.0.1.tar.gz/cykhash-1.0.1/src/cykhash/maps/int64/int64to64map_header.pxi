#
#
# Don't edit it, unless this is I_n_t_6_4_to_6_4_m_a_p header
#
# run sh all_from_XXX.sh to create it from blueprint -  I_n_t_6_4_to_6_4_m_a_p

include "init_int64to64map.pxi"
cdef extern from *:

    ctypedef struct kh_int64to64map_t:
        khint_t n_buckets, size, n_occupied, upper_bound
        uint32_t *flags
        int64_t *keys
        int64_t *vals  

    kh_int64to64map_t* kh_init_int64to64map() nogil
    void kh_destroy_int64to64map(kh_int64to64map_t*) nogil
    void kh_clear_int64to64map(kh_int64to64map_t*) nogil
    khint_t kh_get_int64to64map(kh_int64to64map_t*, int64_t) nogil
    void kh_resize_int64to64map(kh_int64to64map_t*, khint_t) nogil
    khint_t kh_put_int64to64map(kh_int64to64map_t*, int64_t, int* result) nogil
    void kh_del_int64to64map(kh_int64to64map_t*, khint_t) nogil

    #specializing "kh_exist"-macro 
    bint kh_exist_int64to64map "kh_exist" (kh_int64to64map_t*, khint_t) nogil


cdef class Int64to64Map:
    cdef kh_int64to64map_t *table
    cdef bint for_int

    cdef bint contains(self, int64_t key) except *
    cdef Int64to64MapIterator get_iter(self)
    cdef khint_t size(self) 
    cpdef void put_int64(self, int64_t key, int64_t value) except *
    cpdef int64_t get_int64(self, int64_t key) except *
    cpdef void put_float64(self, int64_t key, float64_t value) except *
    cpdef float64_t get_float64(self, int64_t key) except *
    cpdef void discard(self, int64_t key) except *
    

cdef struct int64to64_key_val_pair:
    int64_t key
    int64_t val


cdef class Int64to64MapIterator:
    cdef khint_t   it
    cdef khint_t   size
    cdef Int64to64Map  parent

    cdef bint has_next(self) except *
    cdef int64to64_key_val_pair next(self) except *
    cdef void __move(self) except *

