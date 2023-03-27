import { GET_BY_ID_MASTERS_REQUEST, GET_BY_ID_MASTERS_SUCCESS, GET_BY_ID_MASTERS_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  details: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getByIdReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_BY_ID_MASTERS_REQUEST:
      return {
        loading: true,
        details: {},
        error: "",
      };

    case GET_BY_ID_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        details: action.payload,
      };

    case GET_BY_ID_MASTERS_FAILURE:
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

export { getByIdReducer };
