import {
  AuthActionTypes,
  IAuthState,
  AUTH_OTP_GENERATE,
  AUTH_OTP_VALIDATE,
  AUTH_SIGNOUT, AUTH_SIGNIN, AUTH_FREEZE
} from './type'

const initialState: IAuthState = {
  authenticated: false,
  otpSent: false,
  pinExists: false
}

export const authReducer = (
  state = initialState,
  action: AuthActionTypes
): IAuthState => {
  switch (action.type) {
    case AUTH_OTP_GENERATE:
      return {
        ...state,
        otpSent: true,
        mobile: action.payload.mobile
      }
    case AUTH_OTP_VALIDATE:
      return {
        ...state,
        otpSent: false,
        ...action.payload
      }
    case AUTH_SIGNIN:
      return {
        ...state,
        ...action.payload,
        authenticated: true
      }
    case AUTH_FREEZE:
      return {
        ...initialState,
        pinExists: state.pinExists,
        mobile: state.mobile,
        pinToken: state.pinToken
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

export default authReducer;