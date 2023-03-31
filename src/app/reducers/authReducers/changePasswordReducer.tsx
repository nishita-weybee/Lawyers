import { CHANGE_PASSWORD_FAILURE, CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const changePasswordReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case CHANGE_PASSWORD_FAILURE:
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

export { changePasswordReducer };
