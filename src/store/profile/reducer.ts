import {
  ProfileActionTypes,
  IProfileState,
  SET_PROFILE,
} from './type'

const initialState: IProfileState = {
  profileExists: false
}

export const profileReducer = (
  state = initialState,
  action: ProfileActionTypes
): IProfileState => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
export default profileReducer;