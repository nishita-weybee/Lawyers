import {
  GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_FAILURE,
  GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_SUCCESS,
  GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_REQUEST,
} from "../actionTypes";

const initialState = {
  loading: false,
  exeOffDesignationList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getExeOffDesignationDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_REQUEST:
      return {
        loading: true,
        exeOffDesignationList: {},
        error: "",
      };

    case GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_SUCCESS:
      return {
        ...state,
        loading: false,
        exeOffDesignationList: action.payload,
      };

    case GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN_FAILURE:
      return {
        ...state,
        loading: false,
        exeOffDesignationList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getExeOffDesignationDropdownReducer };
