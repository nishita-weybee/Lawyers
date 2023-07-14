import {
  GET_ALL_OPPOSITE_ADVOCATE_FOR_DROPDOWN_FAILURE,
  GET_ALL_OPPOSITE_ADVOCATE_FOR_DROPDOWN_REQUEST,
  GET_ALL_OPPOSITE_ADVOCATE_FOR_DROPDOWN_SUCCESS,
  GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_FAILURE,
  GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_REQUEST,
  GET_ALL_OUR_ADVOCATE_FOR_DROPDOWN_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  oppositeAdvocateList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getAllOppositeAdvocatesForDropdownReducer = (
  state = initialState,
  action: action
) => {
  switch (action.type) {
    case GET_ALL_OPPOSITE_ADVOCATE_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        oppositeAdvocateList: {},
        error: "",
      };

    case GET_ALL_OPPOSITE_ADVOCATE_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        oppositeAdvocateList: action.payload.data,
      };

    case GET_ALL_OPPOSITE_ADVOCATE_FOR_DROPDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        oppositeAdvocateList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getAllOppositeAdvocatesForDropdownReducer };
