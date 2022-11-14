import { createSlice } from '@reduxjs/toolkit';


export const defaultAction = createSlice({
  name: 'default',
  initialState: {
    currentPage: 0,
    accessToken: '',
    facilitiesImages: [],
  },
  reducers: {
    setCurrentPage: (state, action) => { state.currentPage = action.payload },
    setAccessToken: (state, action) => { state.accessToken = action.payload },
    getcloudImages: (state, action) => { state.facilitiesImages = action.payload},
  }
});



export const { setCurrentPage, setAccessToken, getcloudImages} = defaultAction.actions;
export default defaultAction.reducer;