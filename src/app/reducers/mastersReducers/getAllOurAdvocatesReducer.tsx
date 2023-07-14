import {
  GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_FAILURE,
  GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_REQUEST,
  GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  ourAdvocateList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getAllOurAdvocatesForDropdownReducer = (
  state = initialState,
  action: action
) => {
  switch (action.type) {
    case GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        ourAdvocateList: {},
        error: "",
      };

    case GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        ourAdvocateList: action.payload.data,
      };

    case GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        ourAdvocateList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getAllOurAdvocatesForDropdownReducer };
