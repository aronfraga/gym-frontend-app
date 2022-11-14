import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiQuery = createApi({
  reducerPath: "ApiQuery",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://appgymbackend-production.up.railway.app'
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().accessToken.accessToken;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) headers.set("authorization", `Bearer ${token}`);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    //************************************** */
    //********* G E T ' S ****************** */
    //************************************** */

    getRoutines: builder.query({
      query: (data) => ({
        url: "/routines/filter",
        method: "post",
        body: { filters: data },
      }),
    }),

    getFavoriteRoutines: builder.query({
      query: (data) => `routines?favourite=${data}`,
    }),

    getRoutinesById: builder.query({
      query: (id) => `/routines/${id}`,
    }),

    getAllClasses: builder.query({
      query: () => "/classes",
    }),

    getAllUsers: builder.query({
      query: () => "/users",
    }),

    //************************************** */
    //********* P O S T ' S **************** */
    //************************************** */

    addNewRoutines: builder.mutation({
      query: (newRoutines) => ({
        url: "/routines",
        method: "post",
        body: newRoutines,
      }),
    }),

    //************************************** */
    //************ PATCH ******************* */
    //************************************** */

    setFavorites: builder.mutation({
      query: (id) => ({
        url: `/routines/${id}`,
        method: "PATCH",
      }),
    }),

    //************************************** */
    //************** PUT ******************* */
    //************************************** */

    putLogin: builder.mutation({
      query() {
        return {
          url: "/login",
          method: "PUT",
        };
      },
    }),
  }),
});

export const {
  useGetRoutinesQuery,
  useGetFavoriteRoutinesQuery,
  useGetRoutinesByIdQuery,
  useGetAllClassesQuery,
  useGetAllUsersQuery,
  useAddNewRoutinesMutation,
  useSetFavoritesMutation,
  usePutLoginMutation,
} = ApiQuery;
