import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiQuery = createApi({
  reducerPath: 'ApiQuery',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://appgymbackend-production.up.railway.app'
  }),
  endpoints: (builder) => ({
    getAllRoutines: builder.query({
      query: () => '/routines',
    }),
  }),
});

export const { useGetAllRoutinesQuery } = ApiQuery;
