import { setCurrentPage, setAccessToken, getcloudImages} from '../slices/defaultSlice';
import { Buffer } from "buffer";

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

export const fetchImages = () => {
  return async function(dispatch){
      try{ 
          const results = await fetch('/api/v1_1/diapwgajv/resources/image', {
          mode: "no-cors",
          headers: {
              "Authorization": `Basic ${Buffer.from(import.meta.env.CLOUDINARY_API_KEY + ':' + import.meta.env.CLOUDINARY_API_SECRET).toString('base64')}`
          }}).then(res => res.json());
          const cloudinary_array =  await results.resources;
          const cloudinary_images = await cloudinary_array.filter(index =>  index.folder === "AppGym-facilities");
          
          return dispatch(getcloudImages(cloudinary_images));
      
      }catch(error){
              console.log(error.message)
      }
  }
};