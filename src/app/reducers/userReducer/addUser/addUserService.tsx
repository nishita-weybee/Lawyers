import axios from "axios";
import { EDIT_USER_DETAILS, USER_DETAILS, USER_LIST, USER_ROLES } from "../../../helpers/config";

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
  const res = await axios.post(`${EDIT_USER_DETAILS}`, profileDetails);
  return res;
};
