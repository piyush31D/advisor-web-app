export interface IInvestor {
  _id: string;
  email: string;
  firstName: string;
  fullName: string;
  groups: string[];
  lastName: string;
  mobile: string;
  pan: string;
  riskAnalysis: string[];
  user: string;
}
export interface IInvestorState {
  investors: IInvestor[];
}

export const SET_INVESTORS = 'SET_INVESTORS';
export const ADD_INVESTOR = 'ADD_INVESTOR';
export const SET_SELECTED_INVESTOR = "SET_SELECTED_INVESTOR";

interface SetInvestorsAction {
  type: typeof SET_INVESTORS,
  payload: { investors: IInvestor[] }
}
interface AddInvestorAction {
  type: typeof ADD_INVESTOR,
  payload: { investor: IInvestor }
}


export type InvestorActionTypes = SetInvestorsAction | AddInvestorAction;