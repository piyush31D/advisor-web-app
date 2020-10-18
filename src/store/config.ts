import { combineReducers, createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/reducer';
import profileReducer from './profile/reducer';
import groupReducer from './group/reducer';
import investorReducer from './investor/reducer';
import { IAuthState } from './auth/type';
import { IProfileState } from './profile/type';
import { IGroupState } from './group/type';
import { IInvestorState } from './investor/type';
import { PersistPartial } from 'redux-persist/es/persistReducer';

/*
 * combines all the existing reducers
 */
export interface IState {
  authReducer: IAuthState;
  profileReducer: IProfileState & PersistPartial;
  groupReducer: IGroupState;
  investorReducer: IInvestorState
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authReducer'],
  blacklist: ['profileReducer']
}
const profileReducerPersistConfig = {
  key: 'profile',
  storage,
  blacklist: ['fetching']
}

const rootReducers = combineReducers<IState>({
  authReducer,
  profileReducer: persistReducer(profileReducerPersistConfig, profileReducer),
  groupReducer,
  investorReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducers)

const middleware = [thunk];

const enhancers = [applyMiddleware(...middleware)];

const configureStore = (): { store: Store<IState>, persistor: Persistor } => {
  const store = createStore(persistedReducer, compose(...enhancers))
  const persistor = persistStore(store)
  return { store, persistor }
};

export default configureStore();
