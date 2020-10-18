import {
  InvestorActionTypes,
  IInvestor,
  SET_INVESTORS,
  ADD_INVESTOR,
} from './type';

export function setInvestorsAction(payload: { investors: IInvestor[] }): InvestorActionTypes {
  return {
    type: SET_INVESTORS,
    payload
  }
}
export function addInvestorAction(payload: { investor: IInvestor }): InvestorActionTypes {
  return {
    type: ADD_INVESTOR,
    payload
  }
}