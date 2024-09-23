// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../config/config";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    readProduct: builder.query({
      query: () => {
        return {
          url: `/newProduct`,
          method: "GET",
        };
      },
    }),
    deleteProduct: builder.mutation({
      query: (id) => {
        return {
          url: `/newProduct/${id}`,
          method: "DELETE",
        };
      },
    }),
    createProduct: builder.mutation({
      query: (data) => {
        return {
          url: `/newProduct`,
          method: "POST",
          data: data,
        };
      },
    }),
    readSpecificProduct: builder.query({
      query: (id) => {
        return {
          url: `/newProduct/${id}`,
          method: "GET",
        };
      },
    }),
    // updateProduct:builder.mutation({
    //     query:(id) => {
    //       return{
    //         url:`/newProduct/${id}`
    //       }
    //     }
        
    // })
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useReadProductQuery,
  useDeleteProductMutation,
  useReadSpecificProductQuery,
  useCreateProductMutation
} = productApi;
