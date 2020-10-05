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
  fetching: boolean;
}

export const SET_PROFILE = 'SET_PROFILE';
export const SET_PROFILE_FETCHING = "SET_PROFILE_FETCHING"

interface SetProfileAction {
  type: typeof SET_PROFILE,
  payload: { profileExists: boolean, profile: IProfile }
}

interface SetProfileFetchingAction {
  type: typeof SET_PROFILE_FETCHING,
  payload: { fetching: boolean }
}

export type ProfileActionTypes = SetProfileAction | SetProfileFetchingAction;