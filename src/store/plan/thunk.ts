import { Action } from 'redux';
import {
  setProfileAction,
  setProfileFetching
} from './action';
import { IState } from 'src/store/config';
import { ThunkAction } from 'redux-thunk';
import planApi from 'src/apis/plan';

export const createPlanThunk = (data: {
  name: string,
  planType: string,
  minimumInvestment: number,
  supportedProducts: string[],
  pricings:{
    amount: number,
    percentage: number,
    planInterval: string
  }[],
  features?: string[],
  backgroundColor?: string
},
  advisorId: string
): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  console.log(data);
  
  try {
    const { data: axiosData } = await planApi.createPlan(data, advisorId);
    console.log('-----', axiosData);
    dispatch(setProfileAction(axiosData.data));
  } catch (error) {
    console.error(error);
  }
}