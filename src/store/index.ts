import { combineReducers, createStore, compose, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import * as userReducer from './user/reducer';
import { IUserState } from './user/type';

/*
 * combines all the existing reducers
 */
export interface IState {
  userReducer: IUserState;
}

const rootReducers = combineReducers<IState>(
  userReducer
);

const middleware = [thunk];

const enhancers = [applyMiddleware(...middleware)];

const configureStore = (): Store<IState> => {
  return createStore(rootReducers, compose(...enhancers));
};

export default configureStore();
