import { showToastMessageFailure, showToastMessageSuccess } from "../../helpers/helperFunction";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILURE,
} from "../actionTypes";
import { forgotPasswordService, loginService, registerUserService, resetPasswordService } from "./authService";

const request = (type: string) => {
  return { type: type };
};
const success = (type: string, data: object) => {
  return { type: type, payload: data };
};
const failure = (type: string, err: any) => {
  return { type: type, payload: err };
};

export const login = (loginDetails: Object, callBackSucess: Function, callBackFailure: Function) => {
  return (dispatch: any) => {
    dispatch(request(LOGIN_REQUEST));
    return loginService(loginDetails).then(
      (result: any) => {
        dispatch(success(LOGIN_SUCCESS, result));
        callBackSucess(result.data);
      },
      (error: any) => {
        dispatch(failure(LOGIN_FAILURE, error.response.data.error.errorMessage));
        callBackFailure();
      }
    );
  };
};

export const registerUser = (registerUserDetails: Object, callbackSuccess: Function) => {
  return (dispatch: any) => {
    dispatch(request(REGISTER_USER_REQUEST));
    return registerUserService(registerUserDetails).then(
      (result: any) => {
        dispatch(success(REGISTER_USER_SUCCESS, result.data));
        showToastMessageSuccess('User Added');
        callbackSuccess();
      },
      (error: any) => {
        dispatch(failure(REGISTER_USER_FAILURE, error.response.data.error.errorMessage));
        showToastMessageFailure();
      }
    );
  };
};

export const forgotPassword = (email: string) => {
  return (dispatch: any) => {
    dispatch(request(FORGOT_PASSWORD_REQUEST));
    return forgotPasswordService(email).then(
      (result: any) => {
        dispatch(success(FORGOT_PASSWORD_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(FORGOT_PASSWORD_FAILURE, error.response?.data?.error?.errorMessage));
      }
    );
  };
};

export const resetPassword = (newPassword: Object) => {
  return (dispatch: any) => {
    dispatch(request(RESET_PASSWORD_REQUEST));
    return resetPasswordService(newPassword).then(
      (result: any) => {
        dispatch(success(RESET_PASSWORD_SUCCESS, result.data));
      },
      (error: any) => {
        dispatch(failure(RESET_PASSWORD_FAILURE, error.response.data.error.errorMessage));
      }
    );
  };
};
