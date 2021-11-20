import { configureStore } from "@reduxjs/toolkit";
import { ApiSlice } from "../services/product-api";
import CartSliceReducer from "../features/CartSlice";
import UserSliceReducer from "../features/UserSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    CartSlice: CartSliceReducer,
    UserSlice: UserSliceReducer,
    [ApiSlice.reducerPath]: ApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiSlice.middleware),
});
setupListeners(store.dispatch);
