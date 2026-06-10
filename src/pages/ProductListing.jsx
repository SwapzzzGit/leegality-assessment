import { useSelector } from 'react-redux'
import { useProducts } from '../hooks/useProducts'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import FilterSidebar from '../components/FilterSidebar'
import './ProductListing.scss'

export default function ProductListing() {
  useProducts()

  const { products, loading, error } = useSelector((state) => state.products)

  return (
    <div className="listing-page">
      <div className="listing-inner">

        <FilterSidebar />

        <main className="listing-main">
          <h2 className="filters-heading">Filters</h2>
          {loading && <div className="loading">Loading products...</div>}
          {error && <div className="error">⚠️ {error}</div>}
          {!loading && !error && products.length === 0 && (
            <div className="empty">No products found.</div>
          )}
          {!loading && products.length > 0 && (
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          <Pagination />
        </main>

      </div>
    </div>
  )
}