import { Action } from 'redux';
import {
  authOtpGenerateAction,
  authOtpValidateAction,
  authSignInAction,
  authSignOutAction
} from 'src/store/auth/action';
import { IState } from 'src/store/config';
import { ThunkAction } from 'redux-thunk';

import authApi from 'src/apis/auth';
import { setAuthorizationHeader } from 'src/utils/axios';

export const authOtpGenerateThunk = (data: {
  mobile: string
}): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  try {
    await authApi.generateOtp(data);
    dispatch(authOtpGenerateAction({ mobile: data.mobile }));
  } catch (error) {
    console.error(error);
  }
}

export const authOtpValidateThunk = (data: {
  mobile: string,
  otp: string
}):
  ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
    try {
      const { data: axiosData } = await authApi.validateOtp(data);
      dispatch(authOtpValidateAction(axiosData.data));
    } catch (error) {
      console.error(error);
    }
  }

export const authPinSetupThunk = (data: {
  mobile: string,
  pin: string,
  pinToken:string
}):
  ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
    try {
      const { data: axiosData } = await authApi.generatePin(data);
      setAuthorizationHeader(axiosData.data.token);
      dispatch(authSignInAction(axiosData.data));
    } catch (error) {
      console.error(error);
    }
  }

export const authPinValidateThunk = (data: {
  mobile: string,
  pin: string,
  pinToken:string
}):
  ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
    try {
      const { data: axiosData } = await authApi.validatePin(data);
      setAuthorizationHeader(axiosData.data.token);
      dispatch(authSignInAction(axiosData.data));
    } catch (error) {
      console.error(error);
    }
  }

export const authSignOutThunk = ():
  ThunkAction<void, IState, unknown, Action<string>> => dispatch => {
    try {
      setAuthorizationHeader();
      dispatch(authSignOutAction());
    } catch (error) {
      console.error(error);
    }
  }