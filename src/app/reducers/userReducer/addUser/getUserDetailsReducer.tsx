import { USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE } from "../../actionTypes";
export interface initialState {
  loading: boolean;
  userDetails: {};
  error: string;
}

const initialState: initialState = {
  loading: false,
  userDetails: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const userDetailsReducer = (state = initialState, action: action) => {


  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return {
        loading: true,
        userDetails: {},
        error: "",  
      };

    case USER_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        userDetails: action.payload,
      };

    case USER_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        userDetails: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { userDetailsReducer };
