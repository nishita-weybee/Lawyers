import { GET_BANK_BRANCH_BY_BANK_ID_FAILURE, GET_BANK_BRANCH_BY_BANK_ID_SUCCESS, GET_BANK_BRANCH_BY_BANK_ID_REQUEST } from "../actionTypes";

const initialState = {
  loading: false,
  branchList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getBankBranchByBankIdReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_BANK_BRANCH_BY_BANK_ID_REQUEST:
      return {
        loading: true,
        branchList: {},
        error: "",
      };

    case GET_BANK_BRANCH_BY_BANK_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        branchList: action.payload,
      };

    case GET_BANK_BRANCH_BY_BANK_ID_FAILURE:
      return {
        ...state,
        loading: false,
        branchList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getBankBranchByBankIdReducer };
