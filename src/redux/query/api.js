import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ApiQuery = createApi({
  reducerPath: 'ApiQuery',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001'
  }),
  endpoints: (builder) => ({
    getAllRoutines: builder.query({
      query: () => '/routines',
    }),
  }),
});

export const { useGetAllRoutinesQuery } = ApiQuery;
