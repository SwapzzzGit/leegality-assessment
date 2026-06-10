import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';

export default function ProductCard({ product }) {
  if (!product) return null;
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <StarRating rating={product.rating} />
      <Link to={`/products/${product.id}`}>View</Link>
    </div>
  );
}
