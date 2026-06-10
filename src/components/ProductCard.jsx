import { useNavigate } from 'react-router-dom'
import StarRating from './StarRating'
import './ProductCard.scss'

export default function ProductCard({ product }) {
  const navigate = useNavigate()

  function handleClick() {
    navigate(`/product/${product.id}`)
  }

  return (
    <div className="product-card" onClick={handleClick}>
      <div className="card-image">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
      </div>
      <div className="card-info">
        <p className="card-title">{product.title}</p>
        <div className="card-bottom">
          <span className="card-price">${product.price}</span>
          <StarRating rating={product.rating} />
        </div>
      </div>
    </div>
  )
}