import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import './theme/common.css'
import { getUser, getToken } from 'src/utils/storage';
import store from 'src/store';
import { userSignInAction } from 'src/store/user/action';
import { setAuthorizationHeader } from 'src/utils/axios';
import { BrowserRouter } from 'react-router-dom';
import AppWithTheme from './theme/app-theme';

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      try {
        const user = getUser();
        if (user)
          store.dispatch(userSignInAction(user));
      } catch (error) {
        console.error(error);
      }
      try {
        const token = getToken();
        if (token)
          setAuthorizationHeader(token)
      } catch (error) {
        console.error(error);
      }
    })();
  })

  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWithTheme />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
