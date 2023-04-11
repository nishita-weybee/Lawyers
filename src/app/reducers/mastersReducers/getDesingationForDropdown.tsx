import {
    GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_FAILURE,
    GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_SUCCESS,
    GET_BANK_OFFICER_FOR_DROPDOWN_MASTERS_REQUEST,
    GET_DESIGNATION_FOR_DROPDOWN_REQUEST,
    GET_DESIGNATION_FOR_DROPDOWN_SUCCESS,
    GET_DESIGNATION_FOR_DROPDOWN_FAILURE,
  } from "../actionTypes";
  
  const initialState = {
    loading: false,
    designation: {},
    error: "",
  };
  
  export interface action {
    type: string;
    payload: any;
  }
  
  const getDesignationForDropdownReducer = (state = initialState, action: action) => {
    switch (action.type) {
      case GET_DESIGNATION_FOR_DROPDOWN_REQUEST:
        return {
          loading: true,
          designation: {},
          error: "",
        };
  
      case GET_DESIGNATION_FOR_DROPDOWN_SUCCESS:
        return {
          ...state,
          loading: false,
          designation: action.payload,
        };
  
      case GET_DESIGNATION_FOR_DROPDOWN_FAILURE:
        return {
          ...state,
          loading: false,
          designation: {},
          error: action.payload,
        };
  
      default: {
        return state;
      }
    }
  };
  
  export { getDesignationForDropdownReducer };
  