import {
  GET_BANK_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_BANK_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_BANK_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_REQUEST,
} from "../actionTypes";

const initialState = {
  loading: false,
  districtList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getDistrictForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_DISTRICT_FOR_DROPDOWN_MASTERS_REQUEST:
      return {
        loading: true,
        districtList: {},
        error: "",
      };

    case GET_DISTRICT_FOR_DROPDOWN_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        districtList: action.payload,
      };

    case GET_DISTRICT_FOR_DROPDOWN_MASTERS_FAILURE:
      return {
        ...state,
        loading: false,
        districtList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getDistrictForDropdownReducer };
