import { Action } from 'redux';
import {
  setGroupsAction,
  addGroupAction, setSelectedGroupAction, addInvestorsToGroupAction
} from './action';
import { IState } from 'src/store/config';
import { ThunkAction } from 'redux-thunk';
import investorApi from 'src/apis/investor';
import { IGroup } from './type';
import { IInvestor } from '../investor/type';

export const getGroupsThunk = (advisorId: string): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  try {
    const { data: axiosData } = await investorApi.getGroups(advisorId);
    dispatch(setGroupsAction(axiosData.data));
  } catch (error) {
    console.error(error);
  }
}

export const getGroupThunk = (advisorId: string, groupId: string): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  try {
    const { data: axiosData } = await investorApi.getGroup(advisorId, groupId);
    dispatch(setSelectedGroupAction({ data: axiosData.data.group as IGroup, _id: axiosData.data.group._id as string }));
  } catch (error) {
    console.error(error);
  }
}

export const addInvestorsToGroupThunk = (
  advisorId: string,
  group: {
    _id: string,
    index: number
  },
  investors: {
    _ids: string[],
    investors: IInvestor[]
  }
): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {

  try {
    await investorApi.addInvestorsToGroup(advisorId, group._id, { investors: investors._ids });
    dispatch(addInvestorsToGroupAction({ index: group.index, investors: investors.investors }));
  } catch (error) {
    console.error(error);
  }
}

export const createGroupThunk = (data: {
  name: string,
  investors: string[]
}, advisorId: string): ThunkAction<void, IState, unknown, Action<string>> => async dispatch => {
  try {
    const { data: axiosData } = await investorApi.createGroup(data, advisorId);
    dispatch(addGroupAction(axiosData.data));
  } catch (error) {
    console.error(error);
  }
}