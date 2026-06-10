import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {
    setProducts(state, action) { state.items = action.payload; },
    setStatus(state, action) { state.status = action.payload; }
  }
});

export const { setProducts, setStatus } = productsSlice.actions;
export default productsSlice.reducer;
