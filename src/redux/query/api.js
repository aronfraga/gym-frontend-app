import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiQuery = createApi({
  reducerPath: "ApiQuery",
  baseQuery: fetchBaseQuery({
    // baseUrl: 'https://appgymbackend-production.up.railway.app'
    baseUrl: "http://localhost:3001",
  }),
  endpoints: (builder) => ({
    //************************************** */
    //*********** G E T ' S **************** */
    //************************************** */

    getAllRoutines: builder.query({
      query: () => "/routines",
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
    //*********** P O S T ' S ************** */
    //************************************** */

    addNewRoutines: builder.mutation({
      query: (newRoutines) => ({
        url: "/routines",
        method: "post",
        body: newRoutines,
      }),
    }),
  }),
});

export const {
  useGetAllRoutinesQuery,
  useGetRoutinesByIdQuery,
  useGetAllClassesQuery,
  useGetAllUsersQuery,
  useAddNewRoutinesMutation,
} = ApiQuery;
