import { axiosInstance } from "../../helpers/apiRequest";
import {
  ACTIVE_DEACTIVE_CASE_CATEGORY,
  ACTIVE_DEACTIVE_CASE_TYPE,
  ACTIVE_DEACTIVE_DESIGNATION,
  ACTIVE_DEACTIVE_DISPOSAL,
  ACTIVE_DEACTIVE_OPPOSITE_ADVOCATE,
  GET_ALL_CASE_CATEGORY,
  GET_CASE_CATEGORY_FOR_DROPDOWN,
  GET_DESIGNATION_FOR_DROPDOWN,
  GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN,
  GET_TALUKA_BY_DISTRICT_ID,
  POST_CASE_CATEGORY,
  POST_CASE_TYPE,
  POST_DESIGNATION,
  POST_DISPOSAL,
  POST_OPPOSITE_ADVOCATE,
} from "../../helpers/config";
import { GET_ALL_DESGINATION } from "../../helpers/config";
import { GET_ALL_CASE_TYPE } from "../../helpers/config";
import { GET_ALL_DISPOSAL } from "../../helpers/config";
import { GET_ALL_OPPOSITE_ADVOCATE } from "../../helpers/config";
import {
  ACTIVE_DEACTIVE_ASSOCIATE_ADVOCATE,
  ACTIVE_DEACTIVE_BANK,
  ACTIVE_DEACTIVE_BANK_BRANCH,
  ACTIVE_DEACTIVE_BANK_OFFICER,
  ACTIVE_DEACTIVE_DEPARTMENT,
  ACTIVE_DEACTIVE_DISTRICT,
  ACTIVE_DEACTIVE_EXECUTER_NAME,
  ACTIVE_DEACTIVE_EXECUTING_OFFICER_OFFICER_DESIGNATION,
  ACTIVE_DEACTIVE_FORUM,
  ACTIVE_DEACTIVE_JUDGE_NAME,
  ACTIVE_DEACTIVE_OUR_ADVOCATE,
  ACTIVE_DEACTIVE_PRODUCT,
  ACTIVE_DEACTIVE_STAGE,
  ACTIVE_DEACTIVE_TALUKA,
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
  GET_ALL_PRODUCT,
  GET_ALL_STAGE,
  GET_ALL_TALUKA,
  GET_BANK_BRANCH_BY_BANK_ID,
  GET_BANK_FOR_DROPDOWN,
  GET_BANK_OFFCIER_FOR_DROPDOWN,
  GET_DISTRICT_FOR_DROPDOWN,
  GET_FORUM_FOR_DROPDOWN,
  GET_JUDGE_FOR_DROPDOWN,
  GET_PRODUCT_FOR_DROPDOWN,
  GET_STAGE_FOR_DROPDOWN,
  POST_ASSOCIATE_ADVOCATE,
  POST_BANK,
  POST_BANK_BRANCH,
  POST_BANK_OFFICER,
  POST_DEPARTMENT,
  POST_DISTRICT,
  POST_EXECUTER_NAME,
  POST_EXECUTING_OFFICER_OFFICER_DESIGNATION,
  POST_FORUM,
  POST_JUDGE_NAME,
  POST_OUR_ADVOCATE,
  POST_PRODUCT,
  POST_STAGE,
  POST_TALUKA,
} from "../../helpers/config";

// Get Masters
export const getAllDistrict = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_DISTRICT}${location}`);
  return res;
};
export const getAllDepartment = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_DEPARTMENT}${location}`);
  return res;
};
export const getAllBank = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_BANK}${location}`);
  return res;
};
export const getAllBankBranch = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_BANK_BRANCH}${location}`);
  return res;
};
export const getAllBankOfficer = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_BANK_OFFICER}${location}`);
  return res;
};
export const getAllAssociateAdvocate = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_ASSOCIATE_ADVOCATE}${location}`);
  return res;
};
export const getAllExecuterName = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_EXECUTER_NAME}${location}`);
  return res;
};
export const getAllExecutingOfficerDesignation = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_EXECUTING_OFFICER_DESIGNATION}${location}`);
  return res;
};
export const getAllForum = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_FORUM}${location}`);
  return res;
};
export const getAllOurAdvocate = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_OUR_ADVOCATE}${location}`);
  return res;
};
export const getAllJudgeName = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_JUDGE_NAME}${location}`);
  return res;
};
export const getAllTaluka = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_TALUKA}${location}`);
  return res;
};
export const getAllProduct = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_PRODUCT}${location}`);
  return res;
};
export const getAllStage = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_STAGE}${location}`);
  return res;
};
export const getAllDisposal = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_DISPOSAL}${location}`);
  return res;
};
export const getAllCaseType = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_CASE_TYPE}${location}`);
  return res;
};
export const getAllCaseCategory = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_CASE_CATEGORY}${location}`);
  return res;
};
export const getAllDesignation = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_DESGINATION}${location}`);
  return res;
};
export const getAllOppositeAdvocate = async (location: any) => {
  const res = await axiosInstance.get(`${GET_ALL_OPPOSITE_ADVOCATE}${location}`);
  return res;
};

// Add Masters
export const postDistrictService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_DISTRICT}`, detail);
  return res;
};
export const postTalukaService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_TALUKA}`, detail);
  return res;
};
export const postForumService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_FORUM}`, detail);
  return res;
};
export const postJudgeNameService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_JUDGE_NAME}`, detail);
  return res;
};
export const postBankService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_BANK}`, detail);
  return res;
};
export const postDepartmentService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_DEPARTMENT}`, detail);
  return res;
};
export const postBankBranchService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_BANK_BRANCH}`, detail);
  return res;
};
export const postBankOfficerService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_BANK_OFFICER}`, detail);
  return res;
};
export const postOurAdvocateService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_OUR_ADVOCATE}`, detail);
  return res;
};
export const postAssociateAdvocateService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_ASSOCIATE_ADVOCATE}`, detail);
  return res;
};
export const postExecuterNameService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_EXECUTER_NAME}`, detail);
  return res;
};
export const postExecutingOfficerDesignationService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_EXECUTING_OFFICER_OFFICER_DESIGNATION}`, detail);
  return res;
};
export const postProductService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_PRODUCT}`, detail);
  return res;
};
export const postStageService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_STAGE}`, detail);
  return res;
};
export const postOppositeAdvocateService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_OPPOSITE_ADVOCATE}`, detail);
  return res;
};
export const postCaseTypeService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_CASE_TYPE}`, detail);
  return res;
};
export const postCaseCategoryService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_CASE_CATEGORY}`, detail);
  return res;
};
export const postDesignationService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_DESIGNATION}`, detail);
  return res;
};
export const postDisposalService = async (detail: any) => {
  const res = await axiosInstance.post(`${POST_DISPOSAL}`, detail);
  return res;
};

// Active Deactive Masters
export const activeDeactiveDistrictService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_DISTRICT}/${id}`, id);
  return res;
};
export const activeDeactiveTalukaService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_TALUKA}/${id}`, id);
  return res;
};
export const activeDeactiveForumService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_FORUM}/${id}`, id);
  return res;
};
export const activeDeactiveJudgeNameService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_JUDGE_NAME}/${id}`, id);
  return res;
};
export const activeDeactiveBankService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_BANK}/${id}`, id);
  return res;
};
export const activeDeactiveDepartmentService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_DEPARTMENT}/${id}`, id);
  return res;
};
export const activeDeactiveBankBranchService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_BANK_BRANCH}/${id}`, id);
  return res;
};
export const activeDeactiveBankOfficerService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_BANK_OFFICER}/${id}`, id);
  return res;
};
export const activeDeactiveOurAdvocateService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_OUR_ADVOCATE}/${id}`, id);
  return res;
};
export const activeDeactiveAssociateAdvocateService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_ASSOCIATE_ADVOCATE}/${id}`, id);
  return res;
};
export const activeDeactiveExecuterNameService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_EXECUTER_NAME}/${id}`, id);
  return res;
};
export const activeDeactiveExecutingOfficerDesignationService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_EXECUTING_OFFICER_OFFICER_DESIGNATION}/${id}`, id);
  return res;
};
export const activeDeactiveProductService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_PRODUCT}/${id}`, id);
  return res;
};
export const activeDeactiveStageService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_STAGE}/${id}`, id);
  return res;
};
export const activeDeactiveOppositeAdvocateService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_OPPOSITE_ADVOCATE}/${id}`, id);
  return res;
};
export const activeDeactiveCaseCategoryService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_CASE_CATEGORY}/${id}`, id);
  return res;
};
export const activeDeactiveCaseTypeService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_CASE_TYPE}/${id}`, id);
  return res;
};
export const activeDeactiveDisposalService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_DISPOSAL}/${id}`, id);
  return res;
};
export const activeDeactiveDesignationService = async (id: any) => {
  const res = await axiosInstance.put(`${ACTIVE_DEACTIVE_DESIGNATION}/${id}`, id);
  return res;
};

//update --> fill input fields
export const getByIdService = async (url: any, id: any) => {
  const res = await axiosInstance.get(`${url}/${id}`);
  return res;
};

//  Update Masters
export const updateMastersService = async (url: any, values: any) => {
  const res = await axiosInstance.put(`${url}`, values);
  return res;
};

// Dropdown
export const getBankBranchByBankId = async (id: any) => {
  const res = await axiosInstance.get(`${GET_BANK_BRANCH_BY_BANK_ID}/${id}`);
  return res;
};
export const getTalukaByDistrictId = async (id: any) => {
  const res = await axiosInstance.get(`${GET_TALUKA_BY_DISTRICT_ID}/${id}`);
  return res;
};
export const getDistrictForDropdown = async () => {
  const res = await axiosInstance.get(`${GET_DISTRICT_FOR_DROPDOWN}`);
  return res;
};
export const getBankForDropdown = async () => {
  const res = await axiosInstance.get(`${GET_BANK_FOR_DROPDOWN}`);
  return res;
};
export const getForumForDropdown = async () => {
  const res = await axiosInstance.get(`${GET_FORUM_FOR_DROPDOWN}`);
  return res;
};
export const getStageForDropdown = async () => {
  const res = await axiosInstance.get(`${GET_STAGE_FOR_DROPDOWN}`);
  return res;
};
export const getJudgeForDropdown = async (id: any) => {
  const res = await axiosInstance.get(`${GET_JUDGE_FOR_DROPDOWN}/${id}`);
  return res;
};
export const getBankOfficerForDropdown = async (id: any) => {
  const res = await axiosInstance.get(`${GET_BANK_OFFCIER_FOR_DROPDOWN}/${id}`);
  return res;
};
export const getProductForDropdown = async () => {
  const res = await axiosInstance.get(`${GET_PRODUCT_FOR_DROPDOWN}`);
  return res;
};
export const getDesignationForDropdown = async () => {
  const res = await axiosInstance.get(`${GET_DESIGNATION_FOR_DROPDOWN}`);
  return res;
};
export const getCaseCategoryForDropdown = async () => {
  const res = await axiosInstance.get(`${GET_CASE_CATEGORY_FOR_DROPDOWN}`);
  return res;
};
export const getExeOffDesignationForDropdown = async () => {
  const res = await axiosInstance.get(`${GET_EXE_OFF_DESIGNATION_FOR_DROPDOWN}`);
  return res;
};
