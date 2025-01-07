import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../api';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/products` }), // Replace with your API URL
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({ page, limit }) => `/?page=${page}&limit=${limit}`,
      providesTags: ['Products'],
    }),
    getProduct: builder.query({
      query: (id) => `/${id}`,
      providesTags: ( id) => [{ type: 'Products', id }],
    }),    
  }),
});
// console.log('first')

export const { 
  useGetAllProductsQuery,
  useGetProductQuery,
} = productsApi;