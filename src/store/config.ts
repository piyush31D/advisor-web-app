import { combineReducers, createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/reducer';
import profileReducer from './profile/reducer';
import { IAuthState } from './auth/type';
import { IProfileState } from './profile/type';

/*
 * combines all the existing reducers
 */
export interface IState {
  authReducer: IAuthState;
  profileReducer: IProfileState;
}

const rootReducers = combineReducers<IState>({
  authReducer,
  profileReducer,
});

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
