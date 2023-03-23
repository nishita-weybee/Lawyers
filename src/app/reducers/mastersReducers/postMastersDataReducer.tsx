import { POST_MASTER_DATA_SUCCESS, POST_MASTER_DATA_FAILURE, POST_MASTER_DATA_REQUEST } from "../actionTypes";

const initialState = {
  loading: false,
  res: {},
  error: "",
};

export interface action {
  type: string;
  payload: any;
  //   master: string;
}

const postMasterDataReducer = (state = initialState, action: action) => {
  //   switch (action.master) {
  //     case "district":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "taluka":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "forum":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "judge":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "bank":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "department":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "bank-branch":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "bank-officer":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "advocate":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "executer":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "executive-officer-designation":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     case "associate-advocate":
  //       switch (action.type) {
  //         case LOGIN_REQUEST:
  //           return {
  //             loading: true,
  //             res: {},
  //             error: "",
  //           };

  //         case LOGIN_SUCCESS:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: action.payload,
  //           };

  //         case LOGIN_FAILURE:
  //           return {
  //             ...state,
  //             loading: false,
  //             res: {},
  //             error: action.payload,
  //           };

  //         default: {
  //           return state;
  //         }
  //       }
  //     default:
  //       return initialState;
  //   }

  switch (action.type) {
    case POST_MASTER_DATA_REQUEST:
      return {
        loading: true,
        res: {},
        error: "",
      };

    case POST_MASTER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        res: action.payload,
      };

    case POST_MASTER_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        res: {},
        error: action.payload,
      };

    default:
      return state;
  }
};

export { postMasterDataReducer };
