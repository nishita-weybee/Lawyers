import { ACTIVE_DEACTIVE_MASTERS_REQUEST, ACTIVE_DEACTIVE_MASTERS_FAILURE, ACTIVE_DEACTIVE_MASTERS_SUCCESS } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const postMasterDataReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case ACTIVE_DEACTIVE_MASTERS_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case ACTIVE_DEACTIVE_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case ACTIVE_DEACTIVE_MASTERS_FAILURE:
      return {
        ...state,
        loading: false,
        res: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export { postMasterDataReducer };
