import { Action } from 'redux';
import {
  setProfileAction,
  setProfileFetching
} from './action';
import { IState } from 'src/store/config';
import { ThunkAction } from 'redux-thunk';

import profileApi from 'src/apis/profile';

export const getProfileThunk = (): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  try {
    dispatch(setProfileFetching({fetching:true}));
    const { data: axiosData } = await profileApi.getProfile();
    dispatch(setProfileAction(axiosData.data));
  } catch (error) {
    console.error(error);
  }
}
export const createProfileThunk = (data:{
  mobile:string,
  email:string,
  pan:string,
  individualDetails:{
    firstName:string,
    lastName:string
  }
}): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  try {
    const { data: axiosData } = await profileApi.createProfile(data);
    dispatch(setProfileAction(axiosData.data));
  } catch (error) {
    console.error(error);
  }
}