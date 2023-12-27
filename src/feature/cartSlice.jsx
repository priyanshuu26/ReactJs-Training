import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    prod: [],
    value: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.prod.push(action.payload);
      console.log(state, 'state');
      console.log(action.payload, 'payload');
    },
    removeItem: (state, action) => {
      state.prod.splice(action.payload, 1);
    },
    clearCart: (state) => {
      state.prod = [];
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { addItem, removeItem, clearCart, increment, decrement } =
  cartSlice.actions;
export default cartSlice.reducer;
