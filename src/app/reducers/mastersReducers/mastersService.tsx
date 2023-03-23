import { axiosInstance } from "../../helpers/apiRequest";
import {
  GET_ALL_ASSOCIATE_ADVOCATE,
  GET_ALL_BANK,
  GET_ALL_BANK_BRANCH,
  GET_ALL_BANK_OFFICER,
  GET_ALL_DEPARTMENT,
  GET_ALL_DISTRICT,
  GET_ALL_EXECUTER_NAME,
  GET_ALL_EXECUTING_OFFICER_DESIGNATION,
  GET_ALL_FORUM,
  GET_ALL_JUDGE_NAME,
  GET_ALL_OUR_ADVOCATE,
  GET_ALL_TALUKA,
} from "../../helpers/config";

export const getAllDistrict = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_DISTRICT}${location}`);
  return res;
};

export const getAllDepartment = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_DEPARTMENT}${location}`);
  return res;
};
export const getAllBank = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_BANK}${location}`);
  return res;
};
export const getAllBankBranch = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_BANK_BRANCH}${location}`);
  return res;
};
export const getAllBankOfficer = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_BANK_OFFICER}${location}`);
  return res;
};
export const getAllAssociateAdvocate = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_ASSOCIATE_ADVOCATE}${location}`);
  return res;
};
export const getAllExecuterName = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_EXECUTER_NAME}${location}`);
  return res;
};
export const getAllExecutingOfficerDesignation = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_EXECUTING_OFFICER_DESIGNATION}${location}`);
  return res;
};
export const getAllForum = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_FORUM}${location}`);
  return res;
};
export const getAllOurAdvocate = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_OUR_ADVOCATE}${location}`);
  return res;
};
export const getAllJudgeName = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_JUDGE_NAME}${location}`);
  return res;
};
export const getAllTaluka = async (location:any) => {
  const res = await axiosInstance.get(`${GET_ALL_TALUKA}${location}`);
  return res;
};

export const postDistrictService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postTalukaService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postForumService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postJudgeNameService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postBankService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postDepartmentService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postBankBranchService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postBankOfficerService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postOurAdvocateService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postAssociateAdvocateService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postExecuterNameService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};
export const postExecutingOfficerDesignationService = async (detail: any) => {
  const res = await axiosInstance.post(``, detail);
  return res;
};



