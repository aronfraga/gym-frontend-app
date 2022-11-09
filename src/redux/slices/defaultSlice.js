import { createSlice } from '@reduxjs/toolkit';

export const defaultAction = createSlice({
  name: 'default',
  initialState: {
    currentPage: 0,
    accessToken: '',
  },
  reducers: {
    setCurrentPage: (state, action) => { state.currentPage = action.payload },
    setAccessToken: (state, action) => { state.accessToken = action.payload }
  }
});

export const { setCurrentPage, setAccessToken } = defaultAction.actions;
export default defaultAction.reducer;