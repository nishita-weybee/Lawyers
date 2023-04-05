import { GET_CASE_BY_ID_REQUEST, GET_CASE_BY_ID_SUCCESS, GET_CASE_BY_ID_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  caseDetails: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getCaseByIdCaseReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_CASE_BY_ID_REQUEST:
      return {
        loading: true,
        caseDetails: {},
        error: "",
      };

    case GET_CASE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        caseDetails: action.payload,
      };

    case GET_CASE_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        caseDetails: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getCaseByIdCaseReducer };
