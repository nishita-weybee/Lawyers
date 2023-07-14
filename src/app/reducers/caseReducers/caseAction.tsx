import {
  showToastMessageFailure,
  showToastMessageSuccess,
} from "../../helpers/helperFunction";
import { VIEW_CASE } from "../../helpers/routesConstant";
import {
  ACTIVE_DEACTIVE_CASE_REQUEST,
  ADD_CASE_FAILURE,
  ADD_CASE_REQUEST,
  ADD_CASE_SUCCESS,
  EDIT_CASE_FAILURE,
  EDIT_CASE_REQUEST,
  EDIT_CASE_SUCCESS,
  GET_ALL_CASE_FAILURE,
  GET_ALL_CASE_REQUEST,
  GET_ALL_CASE_SUCCESS,
  GET_CASE_BY_ID_FAILURE,
  GET_CASE_BY_ID_REQUEST,
  GET_CASE_BY_ID_SUCCESS,
} from "../actionTypes";
import {
  activateDeactivateCaseService,
  addCaseService,
  editCaseService,
  getAllCaseService,
  getCaseByIdService,
} from "./caseService";

const request = (type: string) => {
  return { type: type };
};
const success = (type: string, data: object) => {
  return { type: type, payload: data };
};
const failure = (type: string, err: any) => {
  return { type: type, payload: err };
};

export const postCaseDetails = (details: any, callback: any) => {
  return (dispatch: any) => {
    dispatch(request(ADD_CASE_REQUEST));
    return addCaseService(details).then(
      (result: any) => {
        dispatch(success(ADD_CASE_SUCCESS, result.data));
        showToastMessageSuccess("Case added succesfully");
        callback(VIEW_CASE);
      },
      (error: any) => {
        dispatch(failure(ADD_CASE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const getCaseById = (id: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_CASE_BY_ID_REQUEST));
    return getCaseByIdService(id).then(
      (result: any) => {
        dispatch(success(GET_CASE_BY_ID_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_CASE_BY_ID_FAILURE, error.message));
      }
    );
  };
};

export const editCaseDetails = (details: any, callback: any) => {
  return (dispatch: any) => {
    dispatch(request(EDIT_CASE_REQUEST));
    return editCaseService(details).then(
      (result: any) => {
        dispatch(success(EDIT_CASE_SUCCESS, result.data));
        showToastMessageSuccess("Case updated succesfully");
        callback(VIEW_CASE);
      },
      (error: any) => {
        dispatch(failure(EDIT_CASE_FAILURE, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const activeDeactiveCase = (
  id: any,
  status: any,
  callback: Function
) => {
  return (dispatch: any) => {
    dispatch(request(ACTIVE_DEACTIVE_CASE_REQUEST));
    return activateDeactivateCaseService(id).then(
      (result: any) => {
        dispatch(success(ACTIVE_DEACTIVE_CASE_REQUEST, result.data));
        showToastMessageSuccess(status);
        callback();
      },
      (error: any) => {
        dispatch(failure(ACTIVE_DEACTIVE_CASE_REQUEST, error.message));
        showToastMessageFailure();
      }
    );
  };
};

export const getAllCase = (path: any) => {
  return (dispatch: any) => {
    dispatch(request(GET_ALL_CASE_REQUEST));
    return getAllCaseService(path).then(
      (result: any) => {
        dispatch(success(GET_ALL_CASE_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(GET_ALL_CASE_FAILURE, error.message));
      }
    );
  };
};
