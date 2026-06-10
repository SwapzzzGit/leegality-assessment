import React from 'react';

export default function StarRating({ rating = 0 }) {
  const stars = Array.from({ length: 5 }, (_, i) => (i < Math.round(rating) ? '★' : '☆'));
  return <div className="star-rating">{stars.join(' ')}</div>;
}
