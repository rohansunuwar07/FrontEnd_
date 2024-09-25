// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ["readProduct","readSpecificProduct"],
  endpoints: (builder) => ({
    readProduct: builder.query({
      query: () => {
        return {
          url: `/newProduct`,
          method: "GET",
        };
      },
      providesTags: ["readProduct"],
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/newProduct/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["readProduct"],
    }),
    createProduct: builder.mutation({
      query: (body) => {
        return {
          url: `/newProduct`,
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["readProduct"],
    }),
    readSpecificProduct: builder.query({
      query: (id) => {
        return {
          url: `/newProduct/${id}`,
          method: "GET",
        };
      },
      providesTags:['readSpecificProduct'],
    }),
    updateProduct:builder.mutation({
        query:(info) => {
          return{
            url:`/newProduct/${info.id}`,
            method:"PATCH",
            body:info.body
            // info  came from update.jsx
            // let info = {id:id, body:body}
          }
        },
        invalidatesTags:['readProduct','readSpecificProduct']

    })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useReadProductQuery,
  useDeleteProductMutation,
  useReadSpecificProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation
} = productApi;
