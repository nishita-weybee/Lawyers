import {
  GET_STATUS_FOR_DROPDOWN_FAILURE,
  GET_STATUS_FOR_DROPDOWN_REQUEST,
  GET_STATUS_FOR_DROPDOWN_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  statusList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getAllStatusForDropdownReducer = (
  state = initialState,
  action: action
) => {
  switch (action.type) {
    case GET_STATUS_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        statusList: {},
        error: "",
      };

    case GET_STATUS_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        statusList: action.payload.data,
      };

    case GET_STATUS_FOR_DROPDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        statusList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getAllStatusForDropdownReducer };
