import {
  AUTH_OTP_GENERATE,
  AUTH_OTP_VALIDATE,
  AUTH_SIGNOUT,
  AuthActionTypes,
  IAuthState, IUser, AUTH_SIGNIN
} from './type';

export function authOtpGenerateAction(): AuthActionTypes {
  return {
    type: AUTH_OTP_GENERATE
  }
}

export function authOtpValidateAction(payload: Partial<IAuthState>): AuthActionTypes {
  return {
    type: AUTH_OTP_VALIDATE,
    payload
  }
}


export function authSignInAction(payload: IUser): AuthActionTypes {
  return {
    type: AUTH_SIGNIN,
    payload
  }
}


export function authSignOutAction(): AuthActionTypes {
  return {
    type: AUTH_SIGNOUT
  }
}
