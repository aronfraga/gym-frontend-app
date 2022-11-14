import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ApiQuery } from '../query/api';
import currentPage from '../slices/defaultSlice';
import accessToken from '../slices/defaultSlice';
import facilitiesImages from '../slices/defaultSlice';

export const store = configureStore({
  reducer: {
    currentPage: currentPage,
    accessToken: accessToken,
    facilitiesImages: facilitiesImages,
    [ ApiQuery.reducerPath ]: ApiQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiQuery.middleware)
});

setupListeners(store.dispatch);
