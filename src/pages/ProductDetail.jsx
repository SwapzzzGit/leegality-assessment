import React from 'react';
import { useParams } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

export default function ProductDetail() {
  const { id } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => String(p.id) === String(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>Rating: {product.rating}</p>
    </div>
  );
}
