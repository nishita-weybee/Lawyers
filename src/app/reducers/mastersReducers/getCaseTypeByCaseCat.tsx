import { GET_TALUKA_BY_DISTRICT_ID_FAILURE, GET_TALUKA_BY_DISTRICT_ID_SUCCESS, GET_TALUKA_BY_DISTRICT_ID_REQUEST, GET_CASE_TYPE_BY_CASE_CAT_REQUEST, GET_CASE_TYPE_BY_CASE_CAT_SUCCESS, GET_CASE_TYPE_BY_CASE_CAT_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  caseType: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getCaseTypeByCaseCatReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_CASE_TYPE_BY_CASE_CAT_REQUEST:
      return {
        loading: true,
        caseType: {},
        error: "",
      };

    case GET_CASE_TYPE_BY_CASE_CAT_SUCCESS:
      return {
        ...state,
        loading: false,
        caseType: action.payload,
      };

    case GET_CASE_TYPE_BY_CASE_CAT_FAILURE:
      return {
        ...state,
        loading: false,
        caseType: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getCaseTypeByCaseCatReducer };
