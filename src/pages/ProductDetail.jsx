import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import StarRating from '../components/StarRating'
import './ProductDetail.scss'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [imgIndex, setImgIndex] = useState(0)

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        if (!res.ok) throw new Error('Product not found')
        const data = await res.json()
        setProduct(data)
        setImgIndex(0)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  if (loading) return <div className="detail-loading">Loading...</div>
  if (error) return <div className="detail-error">⚠️ {error}</div>
  if (!product) return null

  return (
    <div className="detail-page">
      <div className="detail-inner">

        <button className="back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft size={16} />
          Back
        </button>

        <div className="detail-card">

          <div className="detail-image">
            <img src={product.images && product.images.length ? product.images[imgIndex] : product.thumbnail} alt={product.title} />

            {product.images && product.images.length > 1 && (
              <div className="image-pagination">
                <button
                  className="page-btn prev-btn"
                  disabled={imgIndex === 0}
                  onClick={() => setImgIndex((s) => Math.max(0, s - 1))}
                >
                  ← Previous
                </button>

                {product.images.map((_, i) => (
                  <button
                    key={i}
                    className={`page-btn ${i === imgIndex ? 'active' : ''}`}
                    onClick={() => setImgIndex(i)}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  className="page-btn next-btn"
                  disabled={imgIndex === product.images.length - 1}
                  onClick={() => setImgIndex((s) => Math.min(product.images.length - 1, s + 1))}
                >
                  Next →
                </button>
              </div>
            )}
          </div>

          <div className="detail-info">
            <h1 className="detail-title">{product.title}</h1>

            <div className="detail-price-row">
              <span className="detail-price">${product.price}</span>
              <StarRating rating={product.rating} />
            </div>

            <div className="detail-meta">
              {product.brand && (
                <p><strong>Brand:</strong> {product.brand}</p>
              )}
              <p><strong>Category:</strong> {product.category}</p>
            </div>

            <div className="detail-divider" />

            <div className="detail-desc">
              <h2>Description</h2>
              <p>{product.description}</p>
            </div>

            {product.reviews && product.reviews.length > 0 && (
              <>
                <div className="detail-divider" />
                <div className="detail-reviews">
                  <h2>Reviews</h2>
                  {product.reviews.map((review, i) => (
                    <div key={i} className="review-item">
                      <div className="review-header">
                        <span className="review-name">{review.reviewerName}</span>
                        <StarRating rating={review.rating} />
                      </div>
                      <p className="review-comment">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}