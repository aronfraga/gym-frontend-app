import { setCurrentPage, setAccessToken, getcloudImages, deletecloudImages} from '../slices/defaultSlice';
import { Buffer } from "buffer";

const CLOUDINARY_API_KEY= import.meta.env.VITE_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET= import.meta.env.VITE_CLOUDINARY_API_SECRET;

export const setPage = (data) => {
  return (dispatch) => {
    return dispatch(setCurrentPage(data));
  }
}

export const setToken = (data) => {
  return (dispatch) => {
    return dispatch(setAccessToken(data));
  }
}

export const fetchGetImages = () => {
  return async function(dispatch){
      try{ 
          const results = await fetch('/api/v1_1/diapwgajv/resources/search', {
          headers: {
               Authorization: `Basic ${Buffer.from(CLOUDINARY_API_KEY + ':' + CLOUDINARY_API_SECRET).toString('base64')}`, 
          }}).then(res => res.json());

          const cloudinary_array =  await results.resources;
          const cloudinary_images = await cloudinary_array.filter(index =>  index.folder === "AppGym-facilities");
          
          return dispatch(getcloudImages(cloudinary_images));
      
      }catch(error){
              console.log(error.message)
      }
  }
};

export const fetchDeleteImages = (value) => {
  return async function(dispatch){
    try{ 
      await fetch('/api/v1_1/diapwgajv/resources/image/upload', {
      body: `public_ids[]=${value}`, 
      method: 'delete',
      headers: {
          "Content-Type": "application/x-www-form-urlencoded",
           Authorization: `Basic ${Buffer.from(CLOUDINARY_API_KEY + ':' + CLOUDINARY_API_SECRET).toString('base64')}`, 
      }});
      return dispatch(deletecloudImages(value))
    }catch(error){
      console.log(error.message)
    }
  }
};