import {
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_FAILURE,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_SUCCESS,
  GET_DISTRICT_FOR_DROPDOWN_MASTERS_REQUEST,
  GET_CASE_CAT_FOR_DROPDOWN_SUCCESS,
  GET_CASE_CAT_FOR_DROPDOWN_REQUEST,
  GET_CASE_CAT_FOR_DROPDOWN_FAILURE,
  GET_JUDGE_BY_TALUKA_REQUEST,
  GET_JUDGE_BY_TALUKA_SUCCESS,
  GET_JUDGE_BY_TALUKA_FAILURE,
} from "../actionTypes";

const initialState = {
  loading: false,
  judgeList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getJudgeByTalukaReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_JUDGE_BY_TALUKA_REQUEST:
      return {
        loading: true,
        judgeList: {},
        error: "",
      };

    case GET_JUDGE_BY_TALUKA_SUCCESS:
      return {
        ...state,
        loading: false,
        judgeList: action.payload.data,
      };

    case GET_JUDGE_BY_TALUKA_FAILURE:
      return {
        ...state,
        loading: false,
        judgeList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getJudgeByTalukaReducer };
