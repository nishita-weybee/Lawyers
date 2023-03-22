import { USER_ROLE_REQUEST, USER_ROLE_SUCCESS, USER_ROLE_FAILURE } from "../actionTypes";
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

const userRoleReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case USER_ROLE_REQUEST:
      return {
        loading: true,
        userRoles: {},
        error: "",
      };

    case USER_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        userRoles: action.payload,
      };

    case USER_ROLE_FAILURE:
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

export { userRoleReducer };
