import {
  BANK_OFFICER_CONST,
  CASE_CATEGORY_CONST,
  CASE_TYPE_CONST,
  DESIGNATION_CONST,
  DISPOSAL_CONST,
  OPPOSITE_ADVOCATE_CONST,
  DISCARD,
  PLEASE_WAIT,
  SUBMIT,
  TALUKA_CONST,
  FORUM_CONST,
  JUDGE_CONST,
  BANK_CONST,
  DEPARTMENT_CONST,
  BANK_BRANCH_CONST,
  ADVOCATE_CONST,
  ASSOCIATE_ADVOCATE_CONST,
  EXECUTIVE_OFFICER_DESIGNATION_CONST,
  PRODUCTS_CONST,
  EXECUTER_CONST,
  STAGE_CONST,
  DISTRICT_CONST,
} from "../../helpers/globalConstant";
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
  GET_ALL_CASE_CATEGORY_FAILURE,
  GET_ALL_CASE_CATEGORY_REQUEST,
  GET_ALL_CASE_CATEGORY_SUCCESS,
  GET_ALL_CASE_TYPE_FAILURE,
  GET_ALL_CASE_TYPE_REQUEST,
  GET_ALL_CASE_TYPE_SUCCESS,
  GET_ALL_DEPARTMENT_FAILURE,
  GET_ALL_DEPARTMENT_REQUEST,
  GET_ALL_DEPARTMENT_SUCCESS,
  GET_ALL_DESIGNATION_FAILURE,
  GET_ALL_DESIGNATION_REQUEST,
  GET_ALL_DESIGNATION_SUCCESS,
  GET_ALL_DISPOSAL_FAILURE,
  GET_ALL_DISPOSAL_REQUEST,
  GET_ALL_DISPOSAL_SUCCESS,
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
  GET_ALL_OPPSITE_ADVOCATE_FAILURE,
  GET_ALL_OPPSITE_ADVOCATE_REQUEST,
  GET_ALL_OPPSITE_ADVOCATE_SUCCESS,
  GET_ALL_OUR_ADVOCATE_FAILURE,
  GET_ALL_OUR_ADVOCATE_REQUEST,
  GET_ALL_OUR_ADVOCATE_SUCCESS,
  GET_ALL_PRODUCT_FAILURE,
  GET_ALL_PRODUCT_REQUEST,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_STAGE_FAILURE,
  GET_ALL_STAGE_REQUEST,
  GET_ALL_STAGE_SUCCESS,
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
    case DISTRICT_CONST:
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
    case TALUKA_CONST:
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
    case FORUM_CONST:
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
    case JUDGE_CONST:
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
    case BANK_CONST:
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
    case DEPARTMENT_CONST:
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
    case BANK_BRANCH_CONST:
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
    case BANK_OFFICER_CONST:
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
    case ADVOCATE_CONST:
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
    case ASSOCIATE_ADVOCATE_CONST:
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
    case EXECUTER_CONST:
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
    case EXECUTIVE_OFFICER_DESIGNATION_CONST:
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
    case PRODUCTS_CONST:
      switch (action.type) {
        case GET_ALL_PRODUCT_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_PRODUCT_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_PRODUCT_FAILURE:
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
    case STAGE_CONST:
      switch (action.type) {
        case GET_ALL_STAGE_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_STAGE_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_STAGE_FAILURE:
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
    case DESIGNATION_CONST:
      switch (action.type) {
        case GET_ALL_DESIGNATION_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_DESIGNATION_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_DESIGNATION_FAILURE:
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
    case OPPOSITE_ADVOCATE_CONST:
      switch (action.type) {
        case GET_ALL_OPPSITE_ADVOCATE_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_OPPSITE_ADVOCATE_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_OPPSITE_ADVOCATE_FAILURE:
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
    case DISPOSAL_CONST:
      switch (action.type) {
        case GET_ALL_DISPOSAL_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_DISPOSAL_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_DISPOSAL_FAILURE:
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
    case CASE_TYPE_CONST:
      switch (action.type) {
        case GET_ALL_CASE_TYPE_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_CASE_TYPE_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_CASE_TYPE_FAILURE:
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
    case CASE_CATEGORY_CONST:
      switch (action.type) {
        case GET_ALL_CASE_CATEGORY_REQUEST:
          return {
            loading: true,
            getAllDetails: {},
            error: "",
          };

        case GET_ALL_CASE_CATEGORY_SUCCESS:
          return {
            ...state,
            loading: false,
            getAllDetails: action.payload,
          };

        case GET_ALL_CASE_CATEGORY_FAILURE:
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
