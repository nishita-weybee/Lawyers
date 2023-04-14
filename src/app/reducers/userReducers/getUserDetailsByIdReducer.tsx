import {
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  USER_DETAILS_BY_ID_REQUEST,
  USER_DETAILS_BY_ID_SUCCESS,
  USER_DETAILS_BY_ID_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  details: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const userDetailsByIdReducer = (state = initialState, action: action) => {
  

  switch (action.type) {
    case USER_DETAILS_BY_ID_REQUEST:
      return {
        loading: true,
        details: {},
        error: "",
      };

    case USER_DETAILS_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload,
      };

    case USER_DETAILS_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        details: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { userDetailsByIdReducer };
