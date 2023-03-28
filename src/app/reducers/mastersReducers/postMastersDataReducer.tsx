import { POST_MASTER_DATA_SUCCESS, POST_MASTER_DATA_FAILURE, POST_MASTER_DATA_REQUEST } from "../actionTypes";

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
    case POST_MASTER_DATA_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case POST_MASTER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case POST_MASTER_DATA_FAILURE:
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
