#
#
# Don't edit it, unless this is I_n_t_6_4_S_e_t implementation
#
# run sh all_from_XXX.sh to create it from blueprint - I_n_t_6_4_S_e_t
#
#

cdef class Int64Set:

    def __cinit__(self, *, number_of_elements_hint=None):
        """
        number_of_elements_hint - number of elements without the need of reallocation.
        """
        self.table = kh_init_int64set()
        if number_of_elements_hint is not None:    
            kh_resize_int64set(self.table, element_n_to_bucket_n(number_of_elements_hint))

    def __len__(self):
        return self.size()
  
    cdef khint_t size(self):
        return self.table.size
        

    def __dealloc__(self):
        if self.table is not NULL:
            kh_destroy_int64set(self.table)
            self.table = NULL

    def __contains__(self, int64_t key):
        return self.contains(key)


    cdef bint contains(self, int64_t key) except *:
        cdef khint_t k
        k = kh_get_int64set(self.table, key)
        return k != self.table.n_buckets


    cpdef void add(self, int64_t key) except *:
        cdef:
            khint_t k
            int ret = 0

        k = kh_put_int64set(self.table, key, &ret)
        self.table.keys[k] = key

    
    cpdef void discard(self, int64_t key) except *:
        cdef khint_t k
        k = kh_get_int64set(self.table, key)
        if k != self.table.n_buckets:
            kh_del_int64set(self.table, k)


    cdef Int64SetIterator get_iter(self):
        return Int64SetIterator(self)

    def __iter__(self):
        return self.get_iter()

    def get_state_info(self):
        return {"n_buckets" : self.table.n_buckets, 
                "n_occupied" : self.table.n_occupied, 
                "upper_bound" : self.table.upper_bound}


### Iterator:
cdef class Int64SetIterator:

    cdef void __move(self) except *:
        while self.it<self.size and not kh_exist_int64set(self.parent.table, self.it):
              self.it+=1       

    cdef bint has_next(self) except *:
        return self.it != self.parent.table.n_buckets
        
    cdef int64_t next(self) except *:
        cdef int64_t result = self.parent.table.keys[self.it]
        self.it+=1#ensure at least one move!
        self.__move()
        return result


    def __cinit__(self, Int64Set parent):
        self.parent = parent
        self.size = parent.table.n_buckets
        #search the start:
        self.it = 0
        self.__move()

    def __next__(self):
        if self.has_next():
            return self.next()
        else:
            raise StopIteration

### Utils:

def Int64Set_from(it):
    res=Int64Set()
    for i in it:
        res.add(i)
    return res

cpdef Int64Set_from_buffer(int64_t[:] buf, double size_hint=0.0):
    cdef Py_ssize_t n = len(buf)
    cdef Py_ssize_t at_least_needed = element_n_from_size_hint(<khint_t>n, size_hint)
    res=Int64Set(number_of_elements_hint=at_least_needed)
    cdef Py_ssize_t i
    for i in range(n):
        res.add(buf[i])
    return res
    


from libc.stdint cimport  uint8_t

cpdef isin_int64(int64_t[:] query, Int64Set db, uint8_t[:] result):
    cdef size_t i
    cdef size_t n=len(query)
    if n!=len(result):
        raise ValueError("Different sizes for query({n}) and result({m})".format(n=n, m=len(result)))
    for i in range(n):
        result[i]=db.contains(query[i])


