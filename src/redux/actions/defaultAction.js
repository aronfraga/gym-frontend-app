import { setCurrentPage, setAccessToken } from '../slices/defaultSlice';

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
