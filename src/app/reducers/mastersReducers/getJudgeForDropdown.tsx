import { GET_JUDGE_DROPDOWN_MASTERS_REQUEST, GET_JUDGE_DROPDOWN_MASTERS_SUCCESS, GET_JUDGE_DROPDOWN_MASTERS_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  judgeList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getJudgeForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_JUDGE_DROPDOWN_MASTERS_REQUEST:
      return {
        loading: true,
        judgeList: {},
        error: "",
      };

    case GET_JUDGE_DROPDOWN_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        judgeList: action.payload,
      };

    case GET_JUDGE_DROPDOWN_MASTERS_FAILURE:
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

export { getJudgeForDropdownReducer };
