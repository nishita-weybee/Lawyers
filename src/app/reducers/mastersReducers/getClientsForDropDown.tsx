import {
  GET_CLIENTS_FOR_DROPDOWN_FAILURE,
  GET_CLIENTS_FOR_DROPDOWN_REQUEST,
  GET_CLIENTS_FOR_DROPDOWN_SUCCESS,
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

const getClientsForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_CLIENTS_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        clientList: {},
        error: "",
      };

    case GET_CLIENTS_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        clientList: action.payload,
      };

    case GET_CLIENTS_FOR_DROPDOWN_FAILURE:
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

export { getClientsForDropdownReducer };