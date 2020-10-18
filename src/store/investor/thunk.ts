import { Action } from 'redux';
import {
  setInvestorsAction,
  addInvestorAction,
} from './action';
import { IState } from 'src/store/config';
import { ThunkAction } from 'redux-thunk';
import investorApi from 'src/apis/investor';
import { IInvestor } from './type';

export const getInvestorsThunk = (advisorId: string): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  try {
    const { data: axiosData } = await investorApi.getInvestors(advisorId);
    const investors = axiosData.data.investors as IInvestor[]
    dispatch(setInvestorsAction({ investors }));
    console.log(investors);

  } catch (error) {
    console.error(error);
  }
}