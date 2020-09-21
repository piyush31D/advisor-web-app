import axios, { AxiosResponse } from 'axios';
import store from '../store';
import { unsetUser } from 'src/utils/storage';
import { authSignOutAction } from 'src/store/auth/action';

export const setAuthorizationHeader = (token?: string) => {
  if (token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else
    delete axios.defaults.headers.common['Authorization'];
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(
  (value: AxiosResponse) => Promise.resolve(value),
  async function (error) {
    if (error && error.response && error.response.status === 401) {
      unsetUser();
      setAuthorizationHeader();
      store.dispatch(authSignOutAction());
    };
    return Promise.reject(error);
  });

export default axios;