import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const tempcart = state.cart.filter(
        (item) => item._id === action.payload._id
      );
      if (tempcart < 1) {
        state.cart.push(action.payload);
      }
    },
    RemoveFromCart: (state, action) => {
      state.cart.forEach((item, index) => {
        if (item._id === action.payload) {
          state.cart.splice(index, 1);
        }
      });
    },
  },
});

export const { AddToCart, RemoveFromCart} = CartSlice.actions;
export default CartSlice.reducer;
