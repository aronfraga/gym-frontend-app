import { createSlice } from '@reduxjs/toolkit';

export const defaultAction = createSlice({
  name: 'default',
  initialState: {
    currentPage: 0,
    tokenIsValid: true,
    facilitiesImages: [],
    staff: [],
    cart_count: 0,
    checkOutProducts: [],
    isAdminLogged: false,
  },
  reducers: {
    setCurrentPage: (state, action) => { state.currentPage = action.payload },
    setTokenExpired: (state, action) => { state.tokenIsValid = action.payload },
    getcloudImages: (state, action) => { state.facilitiesImages = action.payload },
    deletecloudImages: (state, action) => { state.facilitiesImages = state.facilitiesImages.filter((image) => 
      image["public_id"] !== action.payload)},
    getAllStaff: (state, action) => {state.staff = action.payload},
    setCartCount: (state) => {state.cart_count += 1},
    setCheckOutProducts: (state, action) => { state.checkOutProducts = action.payload },
    setAdminPreferences: (state, action) => { state.isAdminLogged = action.payload?true:false},
  }
});

export const { setCurrentPage, setTokenExpired, getcloudImages, deletecloudImages, getAllStaff, setCartCount, setCheckOutProducts, setAdminPreferences } = defaultAction.actions;
export default defaultAction.reducer;