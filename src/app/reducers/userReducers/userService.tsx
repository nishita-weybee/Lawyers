import { axiosInstance } from "../../helpers/apiRequest";
import { ACTIVATE_DEACTIVATE_USER, EDIT_USER_DETAILS, GET_USER_DETAIL_BY_ID, USER_DETAILS, USER_LIST, USER_ROLES } from "../../helpers/config";

export const getUserRoles = async () => {
  const res = await axiosInstance.get(`${USER_ROLES}`);
  return res;
};

export const getUserList = async (path: any) => {
  const res = await axiosInstance.get(`${USER_LIST}${path}`);
  return res;
};

export const getUserDetails = async () => {
  const res = await axiosInstance.get(`${USER_DETAILS}`);
  return res.data;
};

export const getUserDetailsById = async (id:any) => {
  const res = await axiosInstance.get(`${GET_USER_DETAIL_BY_ID}/${id}`);
  return res.data;
};

export const editUserDetails = async (profileDetails: any) => {
  return await axiosInstance.put(`${EDIT_USER_DETAILS}`, profileDetails);
};

export const activateDeactivateUserService = async (id: any) => {
  return await axiosInstance.put(`${ACTIVATE_DEACTIVATE_USER}/${id}`, id, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
