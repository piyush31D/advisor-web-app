import { IUser, USER_SIGNIN, UserActionTypes, USER_SIGNOUT } from './type';

export function userSignInAction(user: IUser): UserActionTypes {
  return {
    type: USER_SIGNIN,
    payload: user
  }
}

export function userSignOutAction(): UserActionTypes {
  return {
    type: USER_SIGNOUT
  }
}
