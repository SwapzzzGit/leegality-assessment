import React from 'react';
import ProductCard from '../components/ProductCard';
import FilterSidebar from '../components/FilterSidebar';
import Pagination from '../components/Pagination';
import useProducts from '../hooks/useProducts';

export default function ProductListing() {
  const { products, status } = useProducts();

  return (
    <div className="product-listing">
      <FilterSidebar />
      <main>
        {status === 'loading' && <p>Loading...</p>}
        {products && products.map((p) => <ProductCard key={p.id} product={p} />)}
        <Pagination page={1} total={1} onChange={() => {}} />
      </main>
    </div>
  );
}
