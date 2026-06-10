import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts, setStatus } from '../store/productsSlice';

export default function useProducts() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    async function fetchProducts() {
      dispatch(setStatus('loading'));
      // Placeholder data — replace with real API call
      const data = [
        { id: 1, title: 'Sample Product 1', price: 19.99, rating: 4 },
        { id: 2, title: 'Sample Product 2', price: 29.99, rating: 5 },
      ];
      dispatch(setProducts(data));
      dispatch(setStatus('succeeded'));
    }
    if (status === 'idle') fetchProducts();
  }, [dispatch, status]);

  return { products, status };
}
