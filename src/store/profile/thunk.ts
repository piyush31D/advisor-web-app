import { Action } from 'redux';
import {
  setProfileAction
} from './action';
import { IState } from 'src/store/config';
import { ThunkAction } from 'redux-thunk';

import profileApi from 'src/apis/profile';

export const getProfileThunk = (): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  try {
    const { data: axiosData } = await profileApi.getProfile();
    dispatch(setProfileAction(axiosData.data));
  } catch (error) {
    console.error(error);
  }
}