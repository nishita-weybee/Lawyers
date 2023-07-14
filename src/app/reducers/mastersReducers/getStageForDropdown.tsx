import {
  GET_STAGE_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_STAGE_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_STAGE_FOR_DROPDOWN_MASTERS_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  stageList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getStageForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_STAGE_FOR_DROPDOWN_MASTERS_REQUEST:
      return {
        loading: true,
        stageList: {},
        error: "",
      };

    case GET_STAGE_FOR_DROPDOWN_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        stageList: action.payload?.data,
      };

    case GET_STAGE_FOR_DROPDOWN_MASTERS_FAILURE:
      return {
        ...state,
        loading: false,
        stageList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getStageForDropdownReducer };
