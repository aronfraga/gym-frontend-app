import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';
import { getToken } from '../../services/cookies';

export const ApiEcommerce = createApi({
  reducerPath: "ecommerce",
  baseQuery: retry(
  fetchBaseQuery({
    baseUrl: "https://appgymbackend-production.up.railway.app/",
    // baseUrl: "http://localhost:3001",
    prepareHeaders: (headers) => {
      const token = getToken().token;
      if (token) headers.set("authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  { maxRetries: 1 }
  ),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ data, page, size }) => ({
        url: `/products/filter?page=${page}&size=${size}`,
        method: "post",
        body: { filters: data },
      }),
      keepUnusedDataFor: 1,
    }),
    getFilteredByCategory: builder.query({
      query: (data) => ({
        url: "/products/filter",
        method: "post",
        body: data,
      }),
    }),
    getProductById: builder.query({
      query: (id) => ({
        url: `/products/${id}`,
        method: "get",
      }),
    }),
    postProduct: builder.mutation({
      query: (payload) => ({
        url: `/products`,
        method: "post",
        body: payload
      })
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "delete",
      }),
      invalidatesTag:["refresh"]
    }),
    putProduct: builder.mutation({
      query: ({id,payload}) => ({
        url: `/products/${id}`,
        method: "put",
        body: payload
      }),
      invalidatesTag:["refresh"]
    }),
    	getAllMembresies: builder.query({
			query: () => '/membresies',
		}),
		getUserProfile: builder.query({
			query: () => '/users/profile',
		}),
  }),
});

export const { useGetAllProductsQuery, useGetFilteredByCategoryQuery, useGetProductByIdQuery, usePostProductMutation, useDeleteProductMutation, usePutProductMutation,useGetAllMembresiesQuery,
	useGetUserProfileQuery, } =
  ApiEcommerce;
