import { ADD_INVESTOR, IInvestor } from '../investor/type';
import {
  GroupActionTypes,
  IGroup,
  SET_GROUPS,
  ADD_GROUP,
  SET_SELECTED_GROUP,
  ADD_INVESTORS_TO_GROUP
} from './type';

export function setGroupsAction(payload: { groups: IGroup[] }): GroupActionTypes {
  return {
    type: SET_GROUPS,
    payload
  }
}
export function addGroupAction(payload: { group: IGroup }): GroupActionTypes {
  return {
    type: ADD_GROUP,
    payload
  }
}
export function setSelectedGroupAction(payload: { index?: number, data?: IGroup, _id: string }): GroupActionTypes {
  return {
    type: SET_SELECTED_GROUP,
    payload
  }
}
export function addInvestorsToGroupAction(payload: { index: number, investors: IInvestor[] }): GroupActionTypes {
  return {
    type: ADD_INVESTORS_TO_GROUP,
    payload
  }
}