import { createSlice } from '@reduxjs/toolkit';

export const defaultAction = createSlice({
  name: 'default',
  initialState: {
    currentPage: 0,
    tokenIsValid: true,
    facilitiesImages: [],
    staff: [],
    itemCheckOut: [],
    isAdminLogged: false,
    alertDelivery: false,
  },
  reducers: {
    setCurrentPage: (state, action) => { state.currentPage = action.payload },
    setTokenExpired: (state, action) => { state.tokenIsValid = action.payload },
    getcloudImages: (state, action) => { state.facilitiesImages = action.payload },
    deletecloudImages: (state, action) => { state.facilitiesImages = state.facilitiesImages.filter((image) => 
      image["public_id"] !== action.payload)},
    getAllStaff: (state, action) => {state.staff = action.payload},
    setItemCheckOut: (state, action) => {state.itemCheckOut = action.payload},
    setqtyItem: (state, action) => {state.qtyItem = action.payload},
    setAdminPreferences: (state, action) => { state.isAdminLogged = action.payload?true:false},
    setAlertDelivery: (state, action) => { state.alertDelivery = action.payload },
  }
});

export const { setCurrentPage, setTokenExpired, getcloudImages, deletecloudImages, getAllStaff, setItemCheckOut, setqtyItem, setAdminPreferences, setAlertDelivery } = defaultAction.actions;

export default defaultAction.reducer;