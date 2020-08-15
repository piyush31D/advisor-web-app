import {
  IUserState,
  UserActionTypes,
  USER_SIGNIN,
  USER_SIGNOUT
} from './type'

const initialState: IUserState = {
  authenticated: false,
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

export const userReducer = (
  state = initialState,
  action: UserActionTypes
): IUserState => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        ...action.payload,
        authenticated: true
      }
    case USER_SIGNOUT:
      return {
        ...state,
        ...initialState
      }
    default:
      return state
  }
}