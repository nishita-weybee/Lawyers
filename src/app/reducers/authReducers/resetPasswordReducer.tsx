import { RESET_PASSWORD_FAILURE, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const resetPasswordReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case RESET_PASSWORD_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case RESET_PASSWORD_FAILURE:
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

export { resetPasswordReducer };
