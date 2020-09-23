import axios, { AxiosError, AxiosResponse } from 'axios';
import config from 'src/store/config';
import { authFreezeAction, authSignOutAction } from 'src/store/auth/action';

const { store } = config;

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
  async (error: AxiosError) => {
    if (error && error.response) {
      if (error.response.status === 401) {
        setAuthorizationHeader();
        store.dispatch(authFreezeAction());
      }
      if (error.response.status === 403) {
        store.dispatch(authSignOutAction());
      }
    };
    return Promise.reject(error);
  });

export default axios;