import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
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
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },

    Increase_Quantity: (state, action) => {
      let itemindex = state.cart.findIndex(
        (item) => item._id === action.payload
      );
      if (state.cart[itemindex].amount < state.cart[itemindex].quantity)
        state.cart[itemindex].amount += 1;
    },

    Decrease_Quantity: (state, action) => {
      let itemindex = state.cart.findIndex(
        (item) => item._id === action.payload
      );
      if (state.cart[itemindex].amount > 0) state.cart[itemindex].amount -= 1;
    },
  },
});

export const {
  AddToCart,
  RemoveFromCart,
  Increase_Quantity,
  Decrease_Quantity,
} = CartSlice.actions;
export default CartSlice.reducer;
