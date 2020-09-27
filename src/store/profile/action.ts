import {
  ProfileActionTypes,
  IProfile,
  SET_PROFILE
} from './type';

export function setProfileAction(payload: { profileExists: boolean, profile: IProfile }): ProfileActionTypes {
  return {
    type: SET_PROFILE,
    payload
  }
}
