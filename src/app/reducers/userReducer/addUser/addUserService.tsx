import axios from "axios";
import { ACTIVATE_DEACTIVATE_USER, EDIT_USER_DETAILS, USER_DETAILS, USER_LIST, USER_ROLES } from "../../../helpers/config";

export const getUserRoles = async () => {
  const res = await axios.get(`${USER_ROLES}`);
  return res;
};

export const getUserList = async (path: any) => {
  const res = await axios.get(`${USER_LIST}${path}`);
  return res;
};

export const getUserDetails = async () => {
  const res = await axios.get(`${USER_DETAILS}`);
  return res.data;
};

export const editUserDetails = async (profileDetails: any) => {
  const res = await axios.put(`${EDIT_USER_DETAILS}`, profileDetails);
  return res;
};

export const activateDeactivateUserService = async (email: any) => {
  const res = await axios.put(`${ACTIVATE_DEACTIVATE_USER}`, email, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res;
};
