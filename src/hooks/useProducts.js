import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setProducts,
  setLoading,
  setError,
  setCategories,
  setTotal,
} from '../store/productsSlice'

const BASE_URL = 'https://dummyjson.com'

export function useProducts() {
  const dispatch = useDispatch()
  const { filters, pagination } = useSelector((state) => state.products)
  const { reloadKey } = useSelector((state) => state.products)

  useEffect(() => {
    async function fetchCategories() {
      try {
        const res = await fetch(`${BASE_URL}/products/categories`)
        const data = await res.json()
        dispatch(setCategories(data))
      } catch (err) {
        console.error('Failed to fetch categories:', err)
      }
    }
    fetchCategories()
  }, [])

  useEffect(() => {
    async function fetchProducts() {
      dispatch(setLoading(true))
      dispatch(setError(null))
      // If query is present but empty, clear results (user cleared search)
      if (typeof filters.query !== 'undefined' && filters.query.trim() === '') {
        dispatch(setProducts([]))
        dispatch(setTotal(0))
        dispatch(setLoading(false))
        return
      }
      try {
        const { page, limit } = pagination
        const skip = (page - 1) * limit
        let url
        // If a search query is provided, use the search endpoint
        if (filters.query && filters.query.trim() !== '') {
          url = `${BASE_URL}/products/search?q=${encodeURIComponent(filters.query)}&limit=${limit}&skip=${skip}`
        } else if (filters.category) {
          url = `${BASE_URL}/products/category/${filters.category}?limit=${limit}&skip=${skip}`
        } else {
          url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`
        }
        const res = await fetch(url)
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        let filtered = data.products
        if (filters.minPrice !== '') {
          filtered = filtered.filter((p) => p.price >= Number(filters.minPrice))
        }
        if (filters.maxPrice !== '') {
          filtered = filtered.filter((p) => p.price <= Number(filters.maxPrice))
        }
        if (filters.brands.length > 0) {
          filtered = filtered.filter((p) => filters.brands.includes(p.brand))
        }
        dispatch(setProducts(filtered))
        dispatch(setTotal(data.total))
      } catch (err) {
        dispatch(setError(err.message))
      } finally {
        dispatch(setLoading(false))
      }
    }
    fetchProducts()
  }, [filters, pagination.page, pagination.limit, reloadKey])
}