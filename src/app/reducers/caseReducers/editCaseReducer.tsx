import { ADD_CASE_FAILURE, ADD_CASE_SUCCESS, ADD_CASE_REQUEST, EDIT_CASE_REQUEST, EDIT_CASE_SUCCESS, EDIT_CASE_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const editCaseReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case EDIT_CASE_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case EDIT_CASE_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case EDIT_CASE_FAILURE:
      return {
        ...state,
        loading: false,
        res: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { editCaseReducer };
