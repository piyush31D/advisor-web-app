import { Action } from 'redux';
import {
  userSignInAction,
  userSignOutAction
} from 'src/store/user/action';
import { IState } from 'src/store';
import { ThunkAction } from 'redux-thunk';

import userApi from 'src/apis/user';
import { unsetUser } from 'src/utils/storage';
import { setAuthorizationHeader } from 'src/utils/axios';

export const userSignInThunk = (
  mobile: string
): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  const res = await userApi.signIn({ mobile })
  dispatch(userSignInAction(res.data))
}

export const userSignOutThunk = ():
  ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
    await unsetUser();
    setAuthorizationHeader();
    dispatch(userSignOutAction())
  }