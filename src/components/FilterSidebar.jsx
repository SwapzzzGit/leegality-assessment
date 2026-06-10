import { useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiSearch } from 'react-icons/fi'
import {
  setCategory,
  setPriceRange,
  toggleBrand,
  clearFilters,
} from '../store/productsSlice'
import './FilterSidebar.scss'

export default function FilterSidebar() {
  const dispatch = useDispatch()
  const { filters, categories, products } = useSelector((s) => s.products)

  const [localMin, setLocalMin] = useState('')
  const [localMax, setLocalMax] = useState('')

  const availableBrands = useMemo(() => {
    const brands = products.map((p) => p.brand).filter(Boolean)
    return [...new Set(brands)].sort()
  }, [products])

  function handleCategoryChange(slug) {
    dispatch(setCategory(filters.category === slug ? '' : slug))
  }

  function handleApplyPrice() {
    dispatch(setPriceRange({ min: localMin, max: localMax }))
  }

  const hasActiveFilters =
    filters.category ||
    filters.minPrice ||
    filters.maxPrice ||
    filters.brands.length > 0

  return (
    <aside className="filter-sidebar">

      <div className="filter-search">
        <FiSearch size={14} />
        <input type="text" placeholder="Search..." />
      </div>

      {hasActiveFilters && (
        <button className="clear-btn" onClick={() => dispatch(clearFilters())}>
          Clear all filters
        </button>
      )}

      <div className="filter-section">
        <h3 className="filter-heading">Categories</h3>
        <div className="filter-list">
          {categories.map((cat) => (
            <label key={cat.slug} className="filter-item">
              <input
                type="checkbox"
                checked={filters.category === cat.slug}
                onChange={() => handleCategoryChange(cat.slug)}
              />
              <span>{cat.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-heading">Price Range</h3>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min"
            value={localMin}
            onChange={(e) => setLocalMin(e.target.value)}
          />
          <input
            type="number"
            placeholder="Max"
            value={localMax}
            onChange={(e) => setLocalMax(e.target.value)}
          />
        </div>
        <button className="apply-btn" onClick={handleApplyPrice}>
          Apply
        </button>
      </div>

      {availableBrands.length > 0 && (
        <div className="filter-section">
          <h3 className="filter-heading">Brands</h3>
          <div className="filter-list">
            {availableBrands.map((brand) => (
              <label key={brand} className="filter-item">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={() => dispatch(toggleBrand(brand))}
                />
                <span>{brand}</span>
              </label>
            ))}
          </div>
        </div>
      )}

    </aside>
  )
}