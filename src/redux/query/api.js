import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { getToken } from "../../services/cookies";

export const ApiQuery = createApi({
  reducerPath: "ApiQuery",
  baseQuery: retry(
    fetchBaseQuery({
      baseUrl: "https://appgymbackend-production.up.railway.app",
      // baseUrl: "http://localhost:3001",
      prepareHeaders: (headers) => {
        const token = getToken().token;
        if (token) headers.set("authorization", `Bearer ${token}`);
        return headers;
      },
    }),
    { maxRetries: 1 }
  ),
  keepUnusedDataFor: 30,
  tagTypes: ["Borrar", "Img"],

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
      providesTags: ["Borrar"],
    }),

    getSellProducts: builder.query({
      query: (data) => ({
        url: "/products/filter/admin ",
        method: "post",
        body: { filters: { year: data } },
      }),
    }),

    getFavoriteRoutines: builder.query({
      query: (data) => `routines?favourite=${data}`,
    }),

    getAllStaff: builder.query({
      query: () => `/users?role=Admin`,
    }),

    getRoutinesById: builder.query({
      query: (id) => `/routines/${id}`,
    }),

    getAllClasses: builder.query({
      query: () => "/classes",

    }),

    getAllUsers: builder.query({
      query: () => "/users",
      providesTags: ["Img"]
    }),

    getCategory: builder.query({
      query: () => "/category",
    }),

    getMuscles: builder.query({
      query: () => "/muscles",
    }),

    getAllFeedbacks: builder.query({
      query: () => "/feedbacks",
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

    addClass: builder.mutation({
      query: (newClass) => ({
        url: "/classes",
        method: "post",
        body: newClass,
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

    setNewImg: builder.mutation({
      query: (payload) => ({
        url: `/users`,
        method: "PATCH",
        body: {
          "newImage": payload
        }
      }),
      keepUnusedDataFor: 0,
      invalidatesTags: ["Img"],
    }),
    //************************************** */
    //************** DELETE ******************* */
    //************************************** */

    deleteRoutines: builder.mutation({
      query: (id) => ({
        url: `/routines/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Borrar"],
    }),

    putClasses: builder.mutation({
      query({ payload, id }) {
        return {
          url: `/classes/${id}`,
          method: "PUT",
          body: payload,
        };
      },
    }),

    deleteClasses: builder.mutation({
      query(id) {
        return {
          url: `/classes/${id}`,
          method: "DELETE",
        };
      },

    }),
  }),
});

export const {
  useGetRoutinesQuery,
  useGetSellProductsQuery,
  useGetFavoriteRoutinesQuery,
  useGetRoutinesByIdQuery,
  useGetAllClassesQuery,
  useGetAllUsersQuery,
  useGetCategoryQuery,
  useGetMusclesQuery,
  useAddNewRoutinesMutation,
  useSetFavoritesMutation,
  useSetNewImgMutation,
  usePutClassesMutation,
  useDeleteRoutinesMutation,
  useGetAllFeedbacksQuery,
  useAddFeedbackMutation,
  useGetAllStaffQuery,
  useAddClassMutation,
  useDeleteClassesMutation,
} = ApiQuery;
