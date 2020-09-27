export interface IProfile {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  pan: string;
}

export interface IProfileState {
  profileExists: boolean;
  profile?: IProfile;
}

export const SET_PROFILE = 'SET_PROFILE';

interface SetProfileAction {
  type: typeof SET_PROFILE,
  payload: { profileExists: boolean, profile: IProfile }
}

export type ProfileActionTypes = SetProfileAction;