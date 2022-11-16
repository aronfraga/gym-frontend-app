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
    deletecloudImages: (state, action) => {  state.facilitiesImages = state.facilitiesImages.filter(image =>
                                            image["public_id"] !== action.payload)},
  }
});



export const { setCurrentPage, setAccessToken, getcloudImages, deletecloudImages} = defaultAction.actions;
export default defaultAction.reducer;