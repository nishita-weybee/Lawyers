import { GET_BANK_OFFICER_BY_BANK_REQUEST, GET_BANK_OFFICER_BY_BANK_SUCCESS, GET_BANK_OFFICER_BY_BANK_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  bankOfficer: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getBankOfficerByBankReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_BANK_OFFICER_BY_BANK_REQUEST:
      return {
        loading: true,
        bankOfficer: {},
        error: "",
      };

    case GET_BANK_OFFICER_BY_BANK_SUCCESS:
      return {
        ...state,
        loading: false,
        bankOfficer: action.payload,
      };

    case GET_BANK_OFFICER_BY_BANK_FAILURE:
      return {
        ...state,
        loading: false,
        bankOfficer: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getBankOfficerByBankReducer };
