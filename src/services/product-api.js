import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const ApiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://serene-eyrie-59879.herokuapp.com/",
  }),
  endpoints: (builder) => {
    return {
      getProducts: builder.query({
        query: () => "/products",
      }),
      getCategories: builder.query({
        query: () => "/categories",
      }),
      getProductById: builder.query({
        query: (id) => `/products/${id}`,
      }),
    };
  },
});

export const { useGetProductsQuery, useGetCategoriesQuery,useGetProductByIdQuery } = ApiSlice;
