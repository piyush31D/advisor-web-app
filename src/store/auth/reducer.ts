import {
  AuthActionTypes,
  IAuthState,
  AUTH_OTP_GENERATE,
  AUTH_OTP_VALIDATE,
  AUTH_SIGNOUT
} from './type'

const initialState: IAuthState = {
  authenticated: false,
  otpSent: false,
  pinExists: false,
  otpValidated: false,
  user: {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    gender: '',
    picture: '',
    providor: '',
    userType: '',
    roles: []
  }
}

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): IAuthState => {
  switch (action.type) {
    case AUTH_OTP_GENERATE:
      return {
        ...state,
        otpSent: true
      }
    case AUTH_OTP_VALIDATE:
      return {
        ...state,
        otpSent: false,
        otpValidated: true,
        ...action.payload
      }
    case AUTH_SIGNOUT:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}