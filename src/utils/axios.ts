import axios, { AxiosResponse } from 'axios';
import store from '../store';
import { unsetUser } from 'src/utils/storage';
import { userSignOutAction } from 'src/store/user/action';

export const setAuthorizationHeader = (token?: string) => {
  if (token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  else
    delete axios.defaults.headers.common['Authorization'];
}

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(
  (value: AxiosResponse) => Promise.resolve(value),
  async function (error) {
    if (error.response.status === 401) {
      await unsetUser();
      setAuthorizationHeader();
      store.dispatch(userSignOutAction());
    };
    return Promise.reject(error);
  });

export default axios;