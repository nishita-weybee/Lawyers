import {
  GET_ALL_ASSOCIATE_ADVOCATE_FAILURE,
  GET_ALL_ASSOCIATE_ADVOCATE_REQUEST,
  GET_ALL_ASSOCIATE_ADVOCATE_SUCCESS,
  GET_ALL_BANK_BRANCH_FAILURE,
  GET_ALL_BANK_BRANCH_REQUEST,
  GET_ALL_BANK_BRANCH_SUCCESS,
  GET_ALL_BANK_FAILURE,
  GET_ALL_BANK_OFFICER_FAILURE,
  GET_ALL_BANK_OFFICER_REQUEST,
  GET_ALL_BANK_OFFICER_SUCCESS,
  GET_ALL_BANK_REQUEST,
  GET_ALL_BANK_SUCCESS,
  GET_ALL_DEPARTMENT_FAILURE,
  GET_ALL_DEPARTMENT_REQUEST,
  GET_ALL_DEPARTMENT_SUCCESS,
  GET_ALL_DISTRICT_FAILURE,
  GET_ALL_DISTRICT_REQUEST,
  GET_ALL_DISTRICT_SUCCESS,
  GET_ALL_EXECUTER_NAME_FAILURE,
  GET_ALL_EXECUTER_NAME_REQUEST,
  GET_ALL_EXECUTER_NAME_SUCCESS,
  GET_ALL_EXECUTING_OFFICER_DESIGNATION_FAILURE,
  GET_ALL_EXECUTING_OFFICER_DESIGNATION_REQUEST,
  GET_ALL_EXECUTING_OFFICER_DESIGNATION_SUCCESS,
  GET_ALL_FORUM_FAILURE,
  GET_ALL_FORUM_REQUEST,
  GET_ALL_FORUM_SUCCESS,
  GET_ALL_JUDGE_NAME_FAILURE,
  GET_ALL_JUDGE_NAME_REQUEST,
  GET_ALL_JUDGE_NAME_SUCCESS,
  GET_ALL_OUR_ADVOCATE_FAILURE,
  GET_ALL_OUR_ADVOCATE_REQUEST,
  GET_ALL_OUR_ADVOCATE_SUCCESS,
  GET_ALL_TALUKA_FAILURE,
  GET_ALL_TALUKA_REQUEST,
  GET_ALL_TALUKA_SUCCESS,
} from "../actionTypes";

const initialState = {
  loading: false,
  getAllDetails: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
  master: string;
}

const getAllMastersDataReducer = (state = initialState, action: action) => {
  switch (action.master) {
    case "district":
      switch (action.type) {
        case GET_ALL_DISTRICT_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_DISTRICT_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_DISTRICT_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "taluka":
      switch (action.type) {
        case GET_ALL_TALUKA_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_TALUKA_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_TALUKA_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "forum":
      switch (action.type) {
        case GET_ALL_FORUM_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_FORUM_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_FORUM_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "judge":
      switch (action.type) {
        case GET_ALL_JUDGE_NAME_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_JUDGE_NAME_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_JUDGE_NAME_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "bank-details":
      switch (action.type) {
        case GET_ALL_BANK_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_BANK_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_BANK_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "department":
      switch (action.type) {
        case GET_ALL_DEPARTMENT_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_DEPARTMENT_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_DEPARTMENT_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "bank-branch":
      switch (action.type) {
        case GET_ALL_BANK_BRANCH_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_BANK_BRANCH_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_BANK_BRANCH_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "bank-officer":
      switch (action.type) {
        case GET_ALL_BANK_OFFICER_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_BANK_OFFICER_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_BANK_OFFICER_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "advocate":
      switch (action.type) {
        case GET_ALL_OUR_ADVOCATE_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_OUR_ADVOCATE_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_OUR_ADVOCATE_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "associate-advocate":
      switch (action.type) {
        case GET_ALL_ASSOCIATE_ADVOCATE_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_ASSOCIATE_ADVOCATE_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_ASSOCIATE_ADVOCATE_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "executer":
      switch (action.type) {
        case GET_ALL_EXECUTER_NAME_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_EXECUTER_NAME_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_EXECUTER_NAME_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    case "executive-officer-designation":
      switch (action.type) {
        case GET_ALL_EXECUTING_OFFICER_DESIGNATION_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_EXECUTING_OFFICER_DESIGNATION_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_EXECUTING_OFFICER_DESIGNATION_FAILURE:
          return {
            ...state,
            loading: false,
            getAllDetails: {},
            error: action.payload,
          };

        default: {
          return state;
        }
      }
    default:
      return { ...state };
  }
};

export { getAllMastersDataReducer };
