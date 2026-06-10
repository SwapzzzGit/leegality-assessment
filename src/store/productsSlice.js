import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  loading: false,
  error: null,
  categories: [],
  filters: {
    category: '',
    query: '',
    minPrice: '',
    maxPrice: '',
    brands: [],
  },
  reloadKey: 0,
  pagination: {
    page: 1,
    limit: 8,
    total: 0,
  },
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) { state.products = action.payload },
    setLoading(state, action) { state.loading = action.payload },
    setError(state, action) { state.error = action.payload },
    setCategories(state, action) { state.categories = action.payload },
    setTotal(state, action) { state.pagination.total = action.payload },
    setCategory(state, action) {
      state.filters.category = action.payload
      state.pagination.page = 1
    },
    setSearchQuery(state, action) {
      state.filters.query = action.payload
      state.pagination.page = 1
    },
    setPriceRange(state, action) {
      state.filters.minPrice = action.payload.min
      state.filters.maxPrice = action.payload.max
      state.pagination.page = 1
    },
    toggleBrand(state, action) {
      const brand = action.payload
      const index = state.filters.brands.indexOf(brand)
      if (index > -1) state.filters.brands.splice(index, 1)
      else state.filters.brands.push(brand)
      state.pagination.page = 1
    },
    setPage(state, action) { state.pagination.page = action.payload },
    triggerReload(state) { state.reloadKey = (state.reloadKey || 0) + 1 },
    clearFilters(state) {
      state.filters = initialState.filters
      state.pagination.page = 1
    },
  },
})

export const {
  setProducts, setLoading, setError, setCategories,
  setTotal, setCategory, setPriceRange, toggleBrand,
  setSearchQuery, triggerReload,
  setPage, clearFilters,
} = productsSlice.actions

export default productsSlice.reducer