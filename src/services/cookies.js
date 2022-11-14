import Cookies from 'universal-cookie';

export const getToken = () => {
  const cookies = new Cookies();
  return cookies.get('token');
}
  
export const setToken = (data) => {
  const cookies = new Cookies();
  cookies.set('token', data, {path: '/'});
}

export const destroyToken = () => {
  const cookies = new Cookies();
  cookies.remove('token',{path: '/'});
}
