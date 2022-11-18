import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getToken } from '../../services/cookies';

export const ApiEcommerce = createApi({
  reducerPath: "ecommerce",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://appgymbackend-production.up.railway.app'
    baseUrl: "http://localhost:3001",
    /*prepareHeaders: (headers) => {
      const token = getToken().token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },*/
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "get",
      }),
    }),
    getFilteredProducts: builder.query({
      query: (dataMin, dataMax) => ({
        url: "/products/filter",
        method: "post",
        body: { filters: { min: dataMin, max: dataMax }},
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetFilteredProductsQuery } = ApiEcommerce;
