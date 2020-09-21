import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import './theme/common.css'
import { getUser, getToken } from 'src/utils/storage';
import store from 'src/store';
import { authSignInAction } from 'src/store/auth/action';
import { setAuthorizationHeader } from 'src/utils/axios';
import { BrowserRouter } from 'react-router-dom';
import AppWithTheme from './theme/app-theme';

const App: React.FC = () => {
  useEffect(() => {
    try {
      const user = getUser();
      const token = getToken();
      if (user && token) {
        store.dispatch(authSignInAction(user));
        setAuthorizationHeader(token);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppWithTheme />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
