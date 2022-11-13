import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiQuery = createApi({
  reducerPath: "ApiQuery",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://appgymbackend-production.up.railway.app'
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    //************************************** */
    //********* G E T ' S ****************** */
    //************************************** */

    getAllRoutines: builder.query({
      query: () => ({
        url: "/routines",
        method: "post",
        body: { filters: {} },
      }),
    }),

    getFilterRoutines: builder.query({
      query: (data) => ({
        url: "/routines",
        method: "post",
        body: { filters: data },
      }),
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
  useGetAllRoutinesQuery,
  useGetFilterRoutinesQuery,
  useGetRoutinesByIdQuery,
  useGetAllClassesQuery,
  useGetAllUsersQuery,
  useAddNewRoutinesMutation,
  usePutLoginMutation,
} = ApiQuery;
