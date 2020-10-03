import {
  ProfileActionTypes,
  IProfileState,
  SET_PROFILE,
  SET_PROFILE_FETCHING
} from './type'

const initialState: IProfileState = {
  fetching: true,
  profileExists: false
}

export const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
): IProfileState => {
  switch (action.type) {
    case SET_PROFILE_FETCHING:
      return {
        ...state,
        ...action.payload,
      }
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload,
        fetching: false,
      }

    default:
      return state
  }
}
export default profileReducer;