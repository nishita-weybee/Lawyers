import { ADD_CASE_FAILURE, ADD_CASE_SUCCESS, ADD_CASE_REQUEST } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const addCaseReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case ADD_CASE_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case ADD_CASE_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case ADD_CASE_FAILURE:
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

export { addCaseReducer };
