import {
  GET_CASE_TYPE_FOR_DROPDOWN_FAILURE,
  GET_CASE_TYPE_FOR_DROPDOWN_REQUEST,
  GET_CASE_TYPE_FOR_DROPDOWN_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  caseTypeList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getCaseTypeForDropdownReducer = (
  state = initialState,
  action: action
) => {
  switch (action.type) {
    case GET_CASE_TYPE_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        caseTypeList: {},
        error: "",
      };

    case GET_CASE_TYPE_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        caseTypeList: action.payload.data,
      };

    case GET_CASE_TYPE_FOR_DROPDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        caseTypeList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getCaseTypeForDropdownReducer };
