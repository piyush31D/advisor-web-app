import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import moment from 'moment';
import './App.css';
import './theme/common.css'
import config from 'src/store/config';
import { authFreezeAction, authSignInAction, authSignOutAction } from 'src/store/auth/action';
import { setAuthorizationHeader } from 'src/utils/axios';
import AppWithTheme from './theme/app-theme';
import { authSignOutThunk } from './store/auth/thunk';
import { IAuthState } from './store/auth/type';

const { store, persistor } = config;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppWithTheme />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
