import axios from 'axios';
import { setCurrentPage, setTokenExpired } from '../slices/defaultSlice';
import { setToken } from '../../services/cookies';

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
