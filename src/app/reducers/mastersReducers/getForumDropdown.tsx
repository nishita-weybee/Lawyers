import { GET_FORUM_DROPDOWN_MASTERS_REQUEST, GET_FORUM_DROPDOWN_MASTERS_SUCCESS, GET_FORUM_DROPDOWN_MASTERS_FAILURE } from "../actionTypes";

const initialState = {
  loading: false,
  forumList: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
}

const getForumForDropdownReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case GET_FORUM_DROPDOWN_MASTERS_REQUEST:
      return {
        loading: true,
        forumList: {},
        error: "",
      };

    case GET_FORUM_DROPDOWN_MASTERS_SUCCESS:
      return {
        ...state,
        loading: false,
        forumList: action.payload,
      };

    case GET_FORUM_DROPDOWN_MASTERS_FAILURE:
      return {
        ...state,
        loading: false,
        forumList: {},
        error: action.payload,
      };

    default: {
      return state;
    }
  }
};

export { getForumForDropdownReducer };
