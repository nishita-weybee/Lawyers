import { GET_TALUKA_BY_DISTRICT_ID_FAILURE, GET_TALUKA_BY_DISTRICT_ID_SUCCESS, GET_TALUKA_BY_DISTRICT_ID_REQUEST } from "../actionTypes";

const initialState = {
  loading: false,
  talukaList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getTalukaByDistrictIdReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_TALUKA_BY_DISTRICT_ID_REQUEST:
      return {
        loading: true,
        talukaList: {},
        error: "",
      };

    case GET_TALUKA_BY_DISTRICT_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        talukaList: action.payload,
      };

    case GET_TALUKA_BY_DISTRICT_ID_FAILURE:
      return {
        ...state,
        loading: false,
        talukaList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getTalukaByDistrictIdReducer };
