import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "../services/product-api";
import CartSlice from "../features/CartSlice";
import UserSlice from "../features/UserSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    CartSlice: CartSlice,
    User: UserSlice,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
});
setupListeners(store.dispatch);
