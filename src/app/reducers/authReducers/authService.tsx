import { axiosInstance } from "../../helpers/apiRequest";
import { CHANGE_PASSWORD, FORGOT_PASSWORD, LOGIN, REGISTER, RESET_PASSWORD } from "../../helpers/config";

export const loginService = (loginDetails: any) => {
  const res = axiosInstance.post(LOGIN, loginDetails);
  return res;
};

export const resetPasswordService = async (newPass: Object) => {
  return axiosInstance.post(RESET_PASSWORD, newPass);
};

export const forgotPasswordService = async (email: string) => {
  return axiosInstance.post<{ result: boolean }>(FORGOT_PASSWORD, email, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const registerUserService = (registerUserDetails: Object) => {
  return axiosInstance.post(REGISTER, registerUserDetails);
};

export const changePasswordService = async (newPass: Object) => {
  return axiosInstance.put(CHANGE_PASSWORD, newPass, {});
};
