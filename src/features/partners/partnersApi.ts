import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../api';

export const partnersApi = createApi({
  reducerPath: 'partnersApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/partners` }), // Replace with your API URL
  tagTypes: ['Partners'],
  endpoints: (builder) => ({
    getAllPartners: builder.query({
      query: ({ page, limit }) => `/?page=${page}&limit=${limit}`,
      providesTags: ['Partners'],
    }),
    getPartners: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Partners', id }],
    }), 
  }),
});

export const { 
  useGetPartnersQuery,
  useGetAllPartnersQuery,
} = partnersApi;