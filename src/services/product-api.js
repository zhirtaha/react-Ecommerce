import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:2000/",
  }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => "/products",
      }),
      getCategories: builder.query({
        query: () => "/categories",
      }),
      getBrands: builder.query({
        query: () => "/brands",
      }),
      getProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),
      registerUser: builder.mutation({
        query: (userObj) => ({
          url: "/register",
          method: "POST",
          body: userObj,
        }),
      }),
      loginUser: builder.mutation({
        query: (userObj) => ({
          url: "/login",
          method: "POST",
          body: userObj,
        }),
      }),
    };
  },
});

export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetBrandsQuery,
  useGetProductByIdQuery,
  useRegisterUserMutation,
  useLoginUserMutation,
} = ApiSlice;
