import { setCurrentPage } from '../slices/pagination';

export const setPage = (data) => {
  return (dispatch) => {
    return dispatch(setCurrentPage(data));
  }
}
