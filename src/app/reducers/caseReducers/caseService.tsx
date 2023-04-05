import { axiosInstance } from "../../helpers/apiRequest";
import { GET_ALL_CASE, GET_CASE_BY_ID } from "../../helpers/config";
import { EDIT_CASE } from "../../helpers/config";
import { ACIVATE_DEACTIVE_CASE } from "../../helpers/config";
import { ADD_CASE } from "../../helpers/config";

export const addCaseService = async (details: any) => {
  return await axiosInstance.post(`${ADD_CASE}`, details);
};

export const editCaseService = async (details: any) => {
  return await axiosInstance.put(`${EDIT_CASE}`, details);
};

export const activateDeactivateCaseService = async (id: any) => {
  return await axiosInstance.put(`${ACIVATE_DEACTIVE_CASE}/${id}`, id, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getCaseByIdService = async (id: any) => {
  return await axiosInstance.get(`${GET_CASE_BY_ID}/${id}`);
};

export const getAllCaseService = async (path:any) => {
  return await axiosInstance.get(`${GET_ALL_CASE}${path}`);
};
