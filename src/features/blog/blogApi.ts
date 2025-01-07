import { baseUrl } from '../../api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}/blogs`,
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('token');
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

// Create a separate query to refresh the token
const refreshTokenQuery = fetchBaseQuery({
  baseUrl: `${baseUrl}`,  // You can define the base URL here as well or reuse
  credentials: 'include',  // Ensure cookies are included for the refresh request
  method:"POST"
});


// Enhanced base query to handle token refresh
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Check if token expired (e.g., status 401 or 403)
  if (result?.error?.status === 403 || result?.error?.status === 401) {
    console.log('Access token expired, attempting to refresh...');
    
  
  // Attempt to refresh the token
  const refreshResult = await refreshTokenQuery('/refresh', api, extraOptions);

    if (refreshResult?.data?.accessToken) {
      // Save the new token and retry the original request
      localStorage.setItem('token', refreshResult.data.accessToken);
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Logout user if refresh fails
      console.error('Token refresh failed');
      // api.dispatch({ type: 'auth/logout' }); // Example action to handle logout
    }
  }

  return result;
};



export const blogApi = createApi({
  reducerPath: 'blogApi',
  baseQuery: baseQueryWithReauth, // Replace with your API URL
  tagTypes: ['Blog'],
  endpoints: (builder) => ({
    // Get blogs with pagination support
    getBlogs: builder.query<Blog[], { page: number; limit: number }>({
      query: ({ page, limit }) => {
        // Send page and limit as query parameters
        return `/?page=${page}&limit=${limit}`;
      },
      providesTags: ['Blog'],
    }),
    getBlog: builder.query<Blog, string>({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: 'Blog', id }],
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogQuery
} = blogApi;

// Types
export interface Blog {
  id: string;
  title: string;
  content: string;
}
