import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ApiQuery } from '../query/api';
import currentPage from '../slices/defaultSlice';
import tokenIsValid from '../slices/defaultSlice';
import facilitiesImages from '../slices/defaultSlice';
import staff from '../slices/defaultSlice'

export const store = configureStore({
  reducer: {
    currentPage: currentPage,
    tokenIsValid: tokenIsValid,
    facilitiesImages: facilitiesImages,
    staff: staff,
    [ ApiQuery.reducerPath ]: ApiQuery.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiQuery.middleware)
});

setupListeners(store.dispatch);
