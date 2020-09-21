import { combineReducers, createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
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

const middleware = [thunk];

const enhancers = [applyMiddleware(...middleware)];

const configureStore = (): Store<IState> => {
  return createStore(rootReducers, compose(...enhancers));
};

export default configureStore();
