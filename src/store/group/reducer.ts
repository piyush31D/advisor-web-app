import produce, { Draft } from "immer"
import {
  GroupActionTypes,
  IGroupState,
  IGroup,
  SET_GROUPS,
  ADD_GROUP,
  SET_SELECTED_GROUP,
  ADD_INVESTORS_TO_GROUP
} from './type'

const initialState: IGroupState = {
  groups: []
}

export const groupReducer = produce((
  draft: Draft<IGroupState>,
  action: GroupActionTypes
) => {
  switch (action.type) {
    case SET_GROUPS:
      draft.groups = [...draft.groups, ...action.payload.groups]
      break;

    case SET_SELECTED_GROUP:
      if (!action.payload.index) {
        action.payload.index = draft.groups.findIndex((gp) => gp._id === action.payload._id);
      }
      if (action.payload.index >= 0 && !draft.groups[action.payload.index].investors?.length) {
        draft.groups[action.payload.index].investors = [...(action.payload.data?.investors || []), ...(draft.groups[action.payload.index].investors || [])]
      }
      draft.selectedGroup = action.payload;
      break;

    case ADD_GROUP:
      draft.groups.push(action.payload.group);
      break;

    case ADD_INVESTORS_TO_GROUP:
      draft.groups[action.payload.index].investors = [...action.payload.investors, ...(draft.groups[action.payload.index].investors || [])]
      break;
  }
}, initialState);

export default groupReducer;
