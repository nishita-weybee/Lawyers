import { ACTIVATE_DEACTIVATE_USER_REQUEST, ACTIVATE_DEACTIVATE_USER_SUCCESS, ACTIVATE_DEACTIVATE_USER_FAILURE } from "../../actionTypes";
// export interface initialState {
//   loading: boolean;
//   res: {};
//   error: string;
// }

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const activateDeactivateUserReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case ACTIVATE_DEACTIVATE_USER_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case ACTIVATE_DEACTIVATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case ACTIVATE_DEACTIVATE_USER_FAILURE:
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

export { activateDeactivateUserReducer };
