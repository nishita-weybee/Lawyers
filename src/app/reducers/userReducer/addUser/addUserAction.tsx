import {
  USER_ROLE_REQUEST,
  USER_ROLE_SUCCESS,
  USER_ROLE_FAILURE,
  USER_LIST_SUCCESS,
  USER_LIST_FAILURE,
  USER_LIST_REQUEST,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAILURE,
  EDIT_USER_DETAILS_REQUEST,
  EDIT_USER_DETAILS_SUCCESS,
  EDIT_USER_DETAILS_FAILURE,
} from "../../actionTypes";
import { editUserDetails, getUserDetails, getUserList, getUserRoles } from "./addUserService";

const request = (type: string) => {
  return { type: type };
};
const success = (type: string, data: object) => {

  return { type: type, payload: data };
};
const failure = (type: string, err: any) => {
  return { type: type, payload: err };
};

export const fetchUserRoles = () => {
  return (dispatch: any) => {
    dispatch(request(USER_ROLE_REQUEST));
    return getUserRoles().then(
      (result: any) => {
        dispatch(success(USER_ROLE_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(USER_ROLE_FAILURE, error.message));
      }
    );
  };
};

export const fetchUserList = (path: any) => {
  return (dispatch: any) => {
    dispatch(request(USER_LIST_REQUEST));
    return getUserList(path).then(
      (result: any) => {
        dispatch(success(USER_LIST_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(USER_LIST_FAILURE, error.message));
      }
    );
  };
};

export const fetchUserDetails = () => {
  return (dispatch: any) => {
    dispatch(request(USER_DETAILS_REQUEST));
    return getUserDetails().then(
      (result: any) => {
   
        dispatch(success(USER_DETAILS_SUCCESS, result));
      },
      (error: any) => {
        dispatch(failure(USER_DETAILS_FAILURE, error.message));
      }
    );
  };
};

export const postUserDetails = (profileDetails: any) => {
  return (dispatch: any) => {
    dispatch(request(EDIT_USER_DETAILS_REQUEST));
    return editUserDetails(profileDetails).then(
      (result: any) => {
        dispatch(success(EDIT_USER_DETAILS_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(EDIT_USER_DETAILS_FAILURE, error.message));
      }
    );
  };
};
