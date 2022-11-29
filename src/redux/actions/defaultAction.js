import axios from 'axios';
import { setCurrentPage, setTokenExpired, getcloudImages, deletecloudImages, getAllStaff, setItemCheckOut, setqtyItem , setAdminPreferences, setAlertDelivery} from '../slices/defaultSlice';
import { setToken } from '../../services/cookies';
import { Buffer } from "buffer";
import { getToken } from "../../services/cookies";

const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;

export const setPage = (data) => {
  return (dispatch) => {
    return dispatch(setCurrentPage(data));
  };
};

export const tokenRequest = (data) => {
  return async (dispatch) => {
    try {
      // const response = await axios.post("http://localhost:3001/login", data);
      const response = await axios.post(
        "https://appgymbackend-production.up.railway.app/login",
        data
      );
      return setToken(response.data);
    } catch (error) {
      dispatch(setTokenExpired(true));
    }
  };
};

export const setTokenDefault = () => {
  return (dispatch) => {
    dispatch(setTokenExpired(false));
  };
};

export const fetchGetImages = () => {
  return async function (dispatch) {
    const results = await fetch("/api/v1_1/diapwgajv/resources/search", {
      headers: {
        Authorization: `Basic ${Buffer.from(
          CLOUDINARY_API_KEY + ":" + CLOUDINARY_API_SECRET
        ).toString("base64")}`,
      },
    }).then((res) => res.json());
    const cloudinary_array = await results.resources;
    const cloudinary_images = await cloudinary_array.filter(
      (index) => index.folder === "AppGym-facilities"
    );
    return dispatch(getcloudImages(cloudinary_images));
  };
};

export const fetchDeleteImages = (value) => {
  return async function (dispatch) {
    await fetch("/api/v1_1/diapwgajv/resources/image/upload", {
      body: `public_ids[]=${value}`,
      method: "delete",
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
    //const response = await axios.post('http://localhost:3001/payment', data, {
    const response = await axios.post(
      "https://appgymbackend-production.up.railway.app/payment",
      data,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    return window.location.assign(`${response.data.init_point}`);
  };
};

export const fetchGetAllStaff = () => {
  const token = getToken().token;
  return async function (dispatch) {
    //const staffArray = await fetch("http://localhost:3001/users?role=Staff",{
    const staffArray = await fetch(
      "https://appgymbackend-production.up.railway.app/users?role=Staff",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => res.json());
    return dispatch(getAllStaff(staffArray));
  };
};


export const fetchGetAdmins = (email) =>{
  return async function(dispatch){
    try{ 
      const token = getToken().token; 
      const adminsArray = await fetch("https://appgymbackend-production.up.railway.app/users?role=Admin",{
        headers: {
          Authorization: `Bearer ${token}`,
      }}).then(res => res.json());
      const filteredAdmin =  adminsArray.find(admin => admin.email === email);
      let aux = filteredAdmin === undefined?false:true;
      return dispatch(setAdminPreferences(aux));
    }catch(error){
      console.log(error)
    }
  }
}


export const seterItem = (data) => {
  return (dispatch) => {
    let items = [];
		let keys = Object.keys(data);
		let index = keys.length;
		while (index--) { 
      if(keys[index].slice(0,5)==='item_') items.push(JSON.parse(data.getItem(keys[index]))) ;

    }
    if(data.length===0) dispatch(setItemCheckOut([]))
    dispatch(setItemCheckOut(items));
  };
};

export const setItem = (data) => {
  return (dispatch) => {
    dispatch(setqtyItem(data));
  };
};

export const setPurchase = (data, localStorage) => {
  return async (dispatch) => {
    const token = getToken().token;
    //const response = await axios.put('http://localhost:3001/payment', data, {
    await axios.put(
      "https://appgymbackend-production.up.railway.app/payment",
      data,
      {
        headers: {

          authorization: `Bearer ${token}`
        }
    });
    let items = [];
		let keys = Object.keys(localStorage);
		let index = keys.length;
		while (index--) { 
      if(keys[index].slice(0,5)==='item_') items.push(localStorage.removeItem(keys[index])) ;
    }
    dispatch(setAlertDelivery(true));
  }
}

export const resetAlert = () => {
  return (dispatch) => {
    dispatch(setAlertDelivery(false));
  }
}

