import {
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_CASE_CAT_FOR_DROPDOWN_SUCCESS,
  GET_CASE_CAT_FOR_DROPDOWN_REQUEST,
  GET_CASE_CAT_FOR_DROPDOWN_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  caseCatList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getCaseCatForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_CASE_CAT_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        caseCatList: {},
        error: "",
      };

    case GET_CASE_CAT_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        caseCatList: action.payload,
      };

    case GET_CASE_CAT_FOR_DROPDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        caseCatList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getCaseCatForDropdownReducer };
