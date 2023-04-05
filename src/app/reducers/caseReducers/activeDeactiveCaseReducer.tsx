import { ACTIVE_DEACTIVE_CASE_REQUEST, ACTIVE_DEACTIVE_CASE_SUCCESS, ACTIVE_DEACTIVE_CASE_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const activeDeactiveCaseReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case ACTIVE_DEACTIVE_CASE_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case ACTIVE_DEACTIVE_CASE_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case ACTIVE_DEACTIVE_CASE_FAILURE:
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

export { activeDeactiveCaseReducer };
