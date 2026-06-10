import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'
import './StarRating.scss'

export default function StarRating({ rating }) {
  const stars = [1, 2, 3, 4, 5].map((i) => {
    if (i <= Math.floor(rating)) return 'full'
    if (i === Math.ceil(rating) && rating % 1 >= 0.25) return 'half'
    return 'empty'
  })

  return (
    <div className="star-rating">
      {stars.map((type, i) => (
        <span key={i} className="star">
          {type === 'full' && <FaStar />}
          {type === 'half' && <FaStarHalfAlt />}
          {type === 'empty' && <FaRegStar />}
        </span>
      ))}
      <span className="rating-count">({rating.toFixed(1)})</span>
    </div>
  )
}