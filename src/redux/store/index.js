import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
//import { ApiQuery } from '../query/api';
import currentPage from '../slices/pagination';

export const store = configureStore({
  reducer: {
    currentPage: currentPage,
    //[ ApiQuery.reducerPath ]: ApiQuery.reducer,
  },
  //middleware: (getDefaultMiddleware) =>
    //getDefaultMiddleware().concat(ApiQuery.middleware)
});

setupListeners(store.dispatch);