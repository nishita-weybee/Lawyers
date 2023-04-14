import { REGISTER_USER_FAILURE, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const registerUserReducer = (state = initialState, action: action) => {
  
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case REGISTER_USER_FAILURE:
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

export { registerUserReducer };
