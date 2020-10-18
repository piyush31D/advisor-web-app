import { IInvestor } from "../investor/type";

export interface IGroup {
  _id: string;
  name: string;
  investors?: IInvestor[];
  automatic: boolean;
}
export interface IGroupState {
  selectedGroup?: {
    index?: number;
    _id: string;
    data?: IGroup;
  };
  groups: IGroup[];
}

export const SET_GROUPS = 'SET_GROUPS';
export const ADD_GROUP = 'ADD_GROUP';
export const SET_SELECTED_GROUP = "SET_SELECTED_GROUP";
export const ADD_INVESTORS_TO_GROUP = "ADD_INVESTORS_TO_GROUP";

interface SetGroupsAction {
  type: typeof SET_GROUPS,
  payload: { groups: IGroup[] }
}
interface AddGroupAction {
  type: typeof ADD_GROUP,
  payload: { group: IGroup }
}
interface SetSelectedGroupAction {
  type: typeof SET_SELECTED_GROUP,
  payload: { index?: number, data?: IGroup, _id: string }
}
interface AddInvestorsToGroupAction {
  type: typeof ADD_INVESTORS_TO_GROUP,
  payload: { index: number, investors: IInvestor[] }
}


export type GroupActionTypes = SetGroupsAction | AddGroupAction | SetSelectedGroupAction | AddInvestorsToGroupAction;