// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_BASE_URL;

// Define a service using a base URL and expected endpoints
export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/`,
    prepareHeaders: async (headers, { getState }) => {
      const token = await window.Clerk?.session?.getToken();
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (params = {}) => {
        const { categorySlug, colorSlug, featured } = params;
        let queryString = 'products';
        
        const queryParams = [];
        if (categorySlug) queryParams.push(`categorySlug=${categorySlug}`);
        if (colorSlug) queryParams.push(`colorSlug=${colorSlug}`);
        if (featured !== undefined) queryParams.push(`featured=${featured}`);
        
        if (queryParams.length > 0) {
          queryString += `?${queryParams.join('&')}`;
        }
        
        return queryString;
      },
    }),
    getCategories: builder.query({
      query: () => `categories`,
    }), 
    getColors: builder.query({
      query: () => `colors`,
    }),
    getOrder: builder.query({
      query: (id) => `orders/${id}`,
    }),
    createOrder: builder.mutation({
      query: (body) => ({
        url: `orders`,
        method: "POST",
        body,
      }),
    }),
    createCheckoutSession: builder.mutation({
      query: () => ({
        url: `payments/create-checkout-session`,
        method: "POST",
      }),
    }),
    getCheckoutSessionStatus: builder.query({
      query: (sessionId) => `payments/session-status?session_id=${sessionId}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetProductsQuery,
  useGetCategoriesQuery,
  useGetColorsQuery,
  useCreateOrderMutation,
  useGetOrderQuery,
  useCreateCheckoutSessionMutation,
  useGetCheckoutSessionStatusQuery,
} = Api;
