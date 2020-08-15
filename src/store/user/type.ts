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

export interface IUserState {
  authenticated: boolean;
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

export const USER_SIGNIN = 'USER_SIGNIN';
export const USER_SIGNOUT = 'USER_SIGNOUT';

interface UserSigninAction {
  type: typeof USER_SIGNIN
  payload: IUser
}

interface UserSignoutAction {
  type: typeof USER_SIGNOUT
}



export type UserActionTypes = UserSigninAction | UserSignoutAction