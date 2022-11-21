import axios from 'axios';
import { setCurrentPage, setTokenExpired, getcloudImages, deletecloudImages, getAllStaff, setCheckOutProducts } from '../slices/defaultSlice';
import { setToken } from '../../services/cookies';
import { Buffer } from "buffer";
import { getToken } from '../../services/cookies';

const CLOUDINARY_API_KEY= import.meta.env.VITE_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET= import.meta.env.VITE_CLOUDINARY_API_SECRET;


export const setPage = (data) => {
  return (dispatch) => {
    return dispatch(setCurrentPage(data));
  }
}

export const tokenRequest = (data) => {
  return async (dispatch) => {  
    try {
      const response = await axios.post('http://localhost:3001/login', data);
      return setToken(response.data);
    } catch (error) {
      dispatch(setTokenExpired(true))
    }
  }
}

export const setTokenDefault = () => {
  return (dispatch) => {
    dispatch(setTokenExpired(false));
  }
}

export const fetchGetImages = () => {
  return async function(dispatch){
      const results = await fetch('/api/v1_1/diapwgajv/resources/search', {
      headers: {
        Authorization: `Basic ${Buffer.from(CLOUDINARY_API_KEY + ':' + CLOUDINARY_API_SECRET).toString('base64')}`, 
      }}).then(res => res.json());
      const cloudinary_array =  await results.resources;
      const cloudinary_images = await cloudinary_array.filter(index =>  index.folder === "AppGym-facilities");
      return dispatch(getcloudImages(cloudinary_images));
  }
};

export const fetchDeleteImages = (value) => {
  return async function(dispatch){
      await fetch('/api/v1_1/diapwgajv/resources/image/upload', {
      body: `public_ids[]=${value}`, 
      method: 'delete',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
           Authorization: `Basic ${Buffer.from(CLOUDINARY_API_KEY + ':' + CLOUDINARY_API_SECRET).toString('base64')}`, 
      }});
      return dispatch(deletecloudImages(value));
  }
};

export const productToPay = (data) => {
  return async () => {   
    const token = getToken().token;   
    console.log(token);
      const response = await axios.post('http://localhost:3001/payment', data, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      return window.location.assign(`${response.data.init_point}`);
  }
}

export const fetchGetAllStaff = () =>{
  const token = getToken().token;
  return async function(dispatch){
    const staffArray = await fetch("http://localhost:3001/users?role=Staff",{
        headers: {
          Authorization: `Bearer ${token}`,
      }}).then(res => res.json());
    return dispatch(getAllStaff(staffArray));
    }
  
}

export const checkOutProduct = (data) => {
  return (dispatch) => {
    dispatch(setCheckOutProducts(data));
  }
}