import {
  ProfileActionTypes,
  IProfile,
  SET_PROFILE,
  SET_PROFILE_FETCHING
} from './type';

export function setProfileAction(payload: { profileExists: boolean, profile: IProfile }): ProfileActionTypes {
  return {
    type: SET_PROFILE,
    payload
  }
}
export function setProfileFetching(payload:{fetching:boolean}): ProfileActionTypes {
  return {
    type: SET_PROFILE_FETCHING,
    payload
  }
}