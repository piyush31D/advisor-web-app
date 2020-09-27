import {
  AUTH_OTP_GENERATE,
  AUTH_OTP_VALIDATE,
  AUTH_SIGNOUT,
  AuthActionTypes,
  IAuthState,
  AUTH_SIGNIN,
  AUTH_FREEZE
} from './type';

export function authOtpGenerateAction(payload: { mobile: string }): AuthActionTypes {
  return {
    type: AUTH_OTP_GENERATE,
    payload
  }
}

export function authOtpValidateAction(payload: Partial<IAuthState>): AuthActionTypes {
  return {
    type: AUTH_OTP_VALIDATE,
    payload
  }
}


export function authSignInAction(payload: IAuthState): AuthActionTypes {
  return {
    type: AUTH_SIGNIN,
    payload
  }
}

export function authFreezeAction(): AuthActionTypes {
  return {
    type: AUTH_FREEZE
  }
}

export function authSignOutAction(): AuthActionTypes {
  return {
    type: AUTH_SIGNOUT
  }
}
