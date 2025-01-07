import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from '../../api';

export const galleryApi = createApi({
  reducerPath: 'galleryApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${baseUrl}/gallery` }), // Replace with your API URL
  tagTypes: ['Galley'],
  endpoints: (builder) => ({

    getAllGallery: builder.query({
      query: ({ page, limit }) => `/?page=${page}&limit=${limit}`,
      providesTags: ['Galley'],
    }),
    getGallery: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Galley', id }],
    }),    


  }),
});
// console.log('first')

export const { 
  useGetGalleryQuery,
  useGetAllGalleryQuery,
  

} = galleryApi;