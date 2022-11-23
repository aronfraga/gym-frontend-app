import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../services/cookies";

export const ApiQuery = createApi({
  reducerPath: "ApiQuery",
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: "https://appgymbackend-production.up.railway.app",
      //baseUrl: "http://localhost:3001",
      prepareHeaders: (headers) => {
        const token = getToken().token;
        if (token) headers.set("authorization", `Bearer ${token}`);
        return headers;
      },
    }),
    { maxRetries: 1 }
  ),
  keepUnusedDataFor: 30,
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
      keepUnusedDataFor: 2,
    }),

    getFavoriteRoutines: builder.query({
      query: (data) => `routines?favourite=${data}`,
    }),

    getAllStaff: builder.query({
      query: () => `/users?role=staff`,
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

    getCategory: builder.query({
      query: () => "/category",
    }),

    getMuscles: builder.query({
      query: () => "/muscles",
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

    addFeedback: builder.mutation({
      query: (newFeedback) => ({
        url: "/feedbacks",
        method: "post",
        body: newFeedback,
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
      keepUnusedDataFor: 0,
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
  useGetCategoryQuery,
  useGetMusclesQuery,
  useAddNewRoutinesMutation,
  useSetFavoritesMutation,
  usePutLoginMutation,
  useAddFeedbackMutation,
  useGetAllStaffQuery,
} = ApiQuery;
