import { createSlice } from '@reduxjs/toolkit';

export const defaultAction = createSlice({
  name: 'default',
  initialState: {
    currentPage: 0,
    tokenIsValid: true,
    facilitiesImages: [],
    staff: [],
  },
  reducers: {
    setCurrentPage: (state, action) => { state.currentPage = action.payload },
    setTokenExpired: (state, action) => { state.tokenIsValid = action.payload },
    getcloudImages: (state, action) => { state.facilitiesImages = action.payload},
    deletecloudImages: (state, action) => { state.facilitiesImages = state.facilitiesImages.filter(image =>
                                            image["public_id"] !== action.payload)},
    getAllStaff: (state, action) => { state.staff = action.payload },
  }
});


export const { setCurrentPage, setTokenExpired, getcloudImages, deletecloudImages, getAllStaff} = defaultAction.actions;

export default defaultAction.reducer;