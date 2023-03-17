import { EDIT_USER_DETAILS_REQUEST,
    EDIT_USER_DETAILS_SUCCESS,
    EDIT_USER_DETAILS_FAILURE } from "../../actionTypes";
export interface initialState {
  loading: boolean;
  userRoles: {};
  error: string;
}

const initialState: initialState = {
  loading: false,
  userRoles: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const postUserDetailReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case EDIT_USER_DETAILS_REQUEST:
      return {
        loading: true,
        userRoles: {},
        error: "",
      };

    case EDIT_USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userRoles: action.payload,
      };

    case EDIT_USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        userRoles: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { postUserDetailReducer };
