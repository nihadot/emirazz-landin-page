import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageSlice';
import { blogApi } from './features/blog/blogApi';
import { authApi } from './features/auth/authApi';
import { newsApi } from './features/news/newsApi';
import { partnersApi } from './features/partners/partnersApi';
import { galleryApi } from './features/gallery/galleryApi';
import { productsApi } from './features/product/productsApi';

export const store = configureStore({
  reducer: {
    language: languageReducer,
    [blogApi.reducerPath]: blogApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [newsApi.reducerPath]: newsApi.reducer,
    [partnersApi.reducerPath]: partnersApi.reducer,
    [galleryApi.reducerPath]: galleryApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      blogApi.middleware, 
      authApi.middleware,
      newsApi.middleware,
      galleryApi.middleware,
      partnersApi.middleware,
      productsApi.middleware,
    ),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
