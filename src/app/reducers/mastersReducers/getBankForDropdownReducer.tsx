import { GET_BANK_FOR_DROPDOWN_MASTERS_REQUEST, GET_BANK_FOR_DROPDOWN_MASTERS_SUCCESS, GET_BANK_FOR_DROPDOWN_MASTERS_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  bankList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getBankForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_BANK_FOR_DROPDOWN_MASTERS_REQUEST:
      return {
        loading: true,
        bankList: {},
        error: "",
      };

    case GET_BANK_FOR_DROPDOWN_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        bankList: action.payload,
      };

    case GET_BANK_FOR_DROPDOWN_MASTERS_FAILURE:
      return {
        ...state,
        loading: false,
        bankList: {},
        error: action.payload,
      };

    default: {
      return { ...state };
    }
  }
};

export { getBankForDropdownReducer };
