export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  gender: string;
  picture: string;
  providor: string;
  userType: string;
  roles: string[];
}

export interface IAuthState {
  authenticated: boolean;
  otpSent: boolean;
  pinExists: boolean;
  mobile?: string;
  pinToken?: string;
  user?: IUser;
  token?: string;
}

export const AUTH_OTP_GENERATE = 'OTP_GENERATE';
export const AUTH_OTP_VALIDATE = 'OTP_VALIDATE';
export const AUTH_SIGNIN = 'AUTH_SIGNIN';
export const AUTH_SIGNOUT = 'AUTH_SIGNOUT';
export const AUTH_FREEZE = 'AUTH_FREEZE';

interface AuthOtpGenerateAction {
  type: typeof AUTH_OTP_GENERATE,
  payload: { mobile: string }
}

interface AuthOtpValidateAction {
  type: typeof AUTH_OTP_VALIDATE
  payload: Partial<IAuthState>
}

interface AuthSignInAction {
  type: typeof AUTH_SIGNIN,
  payload: IAuthState
}

interface AuthFreezeAction {
  type: typeof AUTH_FREEZE
}

interface AuthSignOutAction {
  type: typeof AUTH_SIGNOUT
}

export type AuthActionTypes = AuthOtpGenerateAction | AuthOtpValidateAction | AuthSignInAction | AuthFreezeAction | AuthSignOutAction