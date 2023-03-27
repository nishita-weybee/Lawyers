import { UPDATE_MASTERS_FAILURE, UPDATE_MASTERS_SUCCESS, UPDATE_MASTERS_REQUEST } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const updateMasterReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case UPDATE_MASTERS_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case UPDATE_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case UPDATE_MASTERS_FAILURE:
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

export { updateMasterReducer };
