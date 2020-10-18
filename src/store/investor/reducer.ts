import {
  InvestorActionTypes,
  IInvestorState,
  SET_INVESTORS,
  ADD_INVESTOR
} from './type'

const initialState: IInvestorState = {
  investors: []
}

export const investorReducer = (
  state = initialState,
  action: InvestorActionTypes
): IInvestorState => {
  switch (action.type) {
    case SET_INVESTORS:
      return {
        ...state,
        investors: [...state.investors, ...action.payload.investors]
      }

    case ADD_INVESTOR:
      return {
        ...state,
        investors: [action.payload.investor, ...state.investors]
      }

    default:
      return state
  }
}
export default investorReducer;