import {
  GET_CLIENTOFFICER_BY_CLIENT_FOR_DROPDOWN_FAILURE,
  GET_CLIENTOFFICER_BY_CLIENT_FOR_DROPDOWN_REQUEST,
  GET_CLIENTOFFICER_BY_CLIENT_FOR_DROPDOWN_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  clientOfficerList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getClientOfficerByClientForDropdownReducer = (
  state = initialState,
  action: action
) => {
  switch (action.type) {
    case GET_CLIENTOFFICER_BY_CLIENT_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        clientOfficerList: {},
        error: "",
      };

    case GET_CLIENTOFFICER_BY_CLIENT_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        clientOfficerList: action.payload.data,
      };

    case GET_CLIENTOFFICER_BY_CLIENT_FOR_DROPDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        clientOfficerList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getClientOfficerByClientForDropdownReducer };
