import { createSlice } from '@reduxjs/toolkit';

export const pagination = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 0,
  },
  reducers: {
    setCurrentPage: (state, action) => { state.currentPage = action.payload },
  }
});

export const { setCurrentPage } = pagination.actions;
export default pagination.reducer;