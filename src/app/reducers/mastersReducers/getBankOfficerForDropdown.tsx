import {
  GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_REQUEST,
} from "../actionTypes";

const initialState = {
  loading: false,
  bankOfficer: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getBankOfficerForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_REQUEST:
      return {
        loading: true,
        bankOfficer: {},
        error: "",
      };

    case GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        bankOfficer: action.payload,
      };

    case GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_FAILURE:
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

export { getBankOfficerForDropdownReducer };
