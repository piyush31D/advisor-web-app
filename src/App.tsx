import './App.css';
import './theme/common.css';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import config from 'src/store/config';
import AppWithTheme from './theme/app-theme';

const { store, persistor } = config;

const App: React.FC = () => {
  document.documentElement.className = 'light-theme';
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
