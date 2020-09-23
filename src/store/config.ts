import { combineReducers, createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import * as authReducer from './auth/reducer';
import { IAuthState } from './auth/type';

/*
 * combines all the existing reducers
 */
export interface IState {
  authReducer: IAuthState;
}

const rootReducers = combineReducers<IState>(
  authReducer
);

const persistConfig = {
  key: 'protofolio',
  storage,
  whitelist: ['authReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducers)

const middleware = [thunk];

const enhancers = [applyMiddleware(...middleware)];

const configureStore = (): { store: Store<IState>, persistor: Persistor } => {
  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)
  return { store, persistor }
};

export default configureStore();
