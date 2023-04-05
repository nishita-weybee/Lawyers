import { GET_ALL_CASE_REQUEST, GET_ALL_CASE_SUCCESS, GET_ALL_CASE_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  case: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getAllCaseReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_ALL_CASE_REQUEST:
      return {
        loading: true,
        case: {},
        error: "",
      };

    case GET_ALL_CASE_SUCCESS:
      return {
        ...state,
        loading: false,
        case: action.payload,
      };

    case GET_ALL_CASE_FAILURE:
      return {
        ...state,
        loading: false,
        case: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getAllCaseReducer };
