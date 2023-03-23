import { USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  userList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const userListReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return {
        loading: true,
        userList: {},
        error: "",
      };

    case USER_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };

    case USER_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        userList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { userListReducer };
