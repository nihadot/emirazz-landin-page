import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../api';

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/news` }), // Replace with your API URL
  tagTypes: ['News'],
  endpoints: (builder) => ({

    getAllNews: builder.query({
      query: ({ page, limit }) => `/?page=${page}&limit=${limit}`,
      providesTags: ['News'],
    }),
    getNews: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'News', id }],
    }),    

  }),
});
// console.log('first')

export const { 
  useGetNewsQuery, 
  useGetAllNewsQuery, 
} = newsApi;