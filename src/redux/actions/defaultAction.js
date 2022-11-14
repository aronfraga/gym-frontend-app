import axios from 'axios';
import { setCurrentPage, setTokenExpired, getcloudImages} from '../slices/defaultSlice';
import { setToken } from '../../services/cookies';
import { Buffer } from "buffer";

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

export const fetchImages = () => {
  return async function(dispatch){
      try { 
          const results = await fetch('/api/v1_1/diapwgajv/resources/image', {
          mode: "no-cors",
          headers: {
              "Authorization": `Basic ${Buffer.from("528937882136667" + ':' + "H-WT2Ys7_qZb_A5KD2dW-HjtBkU").toString('base64')}`
          }}).then(res => res.json());
          const cloudinary_array =  await results.resources;
          const cloudinary_images = await cloudinary_array.filter(index =>  index.folder === "AppGym-facilities");
          return dispatch(getcloudImages(cloudinary_images));
      } catch(error) {
              console.log(error.message) // este console log hay que sacarlo ale
      }
  }
};