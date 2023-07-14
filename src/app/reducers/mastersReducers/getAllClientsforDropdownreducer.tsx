import {
  GET_ALL_CLIENT_FOR_DROPDOWN_FAILURE,
  GET_ALL_CLIENT_FOR_DROPDOWN_REQUEST,
  GET_ALL_CLIENT_FOR_DROPDOWN_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  clientList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getAllClientsForDropdownReducer = (
  state = initialState,
  action: action
) => {
  switch (action.type) {
    case GET_ALL_CLIENT_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        clientList: {},
        error: "",
      };

    case GET_ALL_CLIENT_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        clientList: action.payload.data,
      };

    case GET_ALL_CLIENT_FOR_DROPDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        clientList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getAllClientsForDropdownReducer };
