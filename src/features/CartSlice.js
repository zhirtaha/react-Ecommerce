import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    RemoveFromCart: (state, action) => {
      state.cart.forEach((item, index) => {
        if (item._id === action.payload) {
          state.cart.splice(index, 1);
        }
      });
    },
    Increase_Quantity: (state, action) => {},
    Decrease_Quantity: (state, action) => {},
  },
});

export const {
  AddToCart,
  RemoveFromCart,
  Increase_Quantity,
  Decrease_Quantity,
} = CartSlice.actions;
export default CartSlice.reducer;
