import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import Loader from "../../common/loader/Loader";
import {
  GET_ASSOCIATE_ADVOCATE_BY_ID,
  GET_BANK_BRANCH_BY_ID,
  GET_BANK_BY_ID,
  GET_BANK_OFFICER_BY_ID,
  GET_CASE_CATEGORY_BY_ID,
  GET_CASE_TYPE_BY_ID,
  GET_DEPARTMENT_BY_ID,
  GET_DESIGNATION_BY_ID,
  GET_DISPOSAL_BY_ID,
  GET_DISTRICT_BY_ID,
  GET_EXECUTER_NAME_BY_ID,
  GET_EXECUTING_OFFICER_DESIGNATION_BY_ID,
  GET_FORUM_BY_ID,
  GET_JUDGE_NAME_BY_ID,
  GET_OPPOSITE_ADVOCATE_BY_ID,
  GET_OUR_ADVOCATE_BY_ID,
  GET_PRODUCT_BY_ID,
  GET_STAGE_BY_ID,
  GET_TALUKA_BY_ID,
  UPDATE_ASSOCIATE_ADVOCATE_BY_ID,
  UPDATE_BANK_BRANCH_BY_ID,
  UPDATE_BANK_BY_ID,
  UPDATE_BANK_OFFICER_BY_ID,
  UPDATE_CASE_CATEGORY_BY_ID,
  UPDATE_CASE_TYPE_BY_ID,
  UPDATE_DEPARTMENT_BY_ID,
  UPDATE_DESIGNATION_BY_ID,
  UPDATE_DISPOSAL_BY_ID,
  UPDATE_DISTRICT_BY_ID,
  UPDATE_EXECUTER_NAME_BY_ID,
  UPDATE_EXECUTING_OFFICER_DESIGNATION_BY_ID,
  UPDATE_FORUM_BY_ID,
  UPDATE_JUDGE_NAME_BY_ID,
  UPDATE_OPPOSITE_ADVOCATE_BY_ID,
  UPDATE_OUR_ADVOCATE_BY_ID,
  UPDATE_PRODUCT_BY_ID,
  UPDATE_STAGE_BY_ID,
  UPDATE_TALUKA_BY_ID,
} from "../../../helpers/config";
import {
  BANK_OFFICER_CONST,
  CASE_CATEGORY_CONST,
  CASE_TYPE_CONST,
  DESIGNATION_CONST,
  DISPOSAL_CONST,
  OPPOSITE_ADVOCATE_CONST,
  DISCARD,
  PLEASE_WAIT,
  SUBMIT,
  TALUKA_CONST,
  FORUM_CONST,
  JUDGE_CONST,
  BANK_CONST,
  DEPARTMENT_CONST,
  BANK_BRANCH_CONST,
  ADVOCATE_CONST,
  ASSOCIATE_ADVOCATE_CONST,
  EXECUTIVE_OFFICER_DESIGNATION_CONST,
  PRODUCTS_CONST,
  EXECUTER_CONST,
  STAGE_CONST,
  DISTRICT_CONST,
  REQUIRED,
  NO_DOT_ALLOWED,
} from "../../../helpers/globalConstant";
import {
  ASSOCIATE_ADVOCATE,
  BANK,
  BANK_BRANCH,
  BANK_OFFICER,
  DEPARTMENT,
  DISTRICT,
  EXECUTER,
  EXECUTIVE_OFFICER_DESIGNATION,
  FORUM,
  JUDGE,
  TALUKA,
  ADVOCATE,
  PRODUCTS,
  STAGE,
  CASE_CATEGROY,
  CASE_TYPE,
  DISPOSAL,
  DESIGNATION,
  OPPOSITE_ADVOCATE,
} from "../../../helpers/routesConstant";
import {
  fetchBankBranchByBankId,
  updateMasters,
  getById,
  fetchDistrictForDropdown,
  fetchBankForDropdown,
  postDistrict,
  postTaluka,
  postForum,
  postJudgeName,
  postBank,
  postDepartment,
  postBankBranch,
  postBankOfficer,
  postOurAdvocate,
  postAssociateAdvocate,
  postExecuterName,
  postExecutingOfficerDesignation,
  postStage,
  postProduct,
  fetchForumDropdown,
  postDisposal,
  postDesgination,
  postCaseType,
  postCaseCategory,
  postOppsiteAdvocate,
  fetchDesignationDropdown,
  fetchTalukaByDistrictId,
  fetchCaseCategoryForDropdown,
  fetchExeOffDesignationForDropdown,
} from "../../../reducers/mastersReducers/mastersAction";

export interface props {
  loadingPost: boolean;
  loadingPut: boolean;
  details: any;
  error: any;
  branchList: any;
  districtList: any;
  forumList: any;
  bankList: any;
  getByIdFields: Function;
  getBankList: Function;
  getDistrictList: Function;
  getBranchList: Function;
  updateMastersField: Function;
  postDetails: Function;
  getForumList: Function;
  loadingFields: boolean;
  getDesignationList: Function;
  designationList: any;
  getTalukaList: Function;
  talukaList: any;
  caseCatList: any;
  getCaseCatList: Function;
  getExeOffDesignation: Function;
  exeOffDesignationList: any;
}

const EditDetails: React.FC<props> = ({
  postDetails,
  details,
  getByIdFields,
  updateMastersField,
  branchList,
  districtList,
  bankList,
  getBankList,
  getDistrictList,
  getBranchList,
  loadingPost,
  loadingPut,
  forumList,
  loadingFields,
  getForumList,
  getDesignationList,
  designationList,
  getTalukaList,
  talukaList,
  caseCatList,
  getCaseCatList,
  exeOffDesignationList,
  getExeOffDesignation,
}) => {
  const params = useParams();
  const navigate = useNavigate();

  const loading = params.id ? loadingPut : loadingPost;

  let num = 0;
  let validateFun = Yup.object().shape({
    name: Yup.string().required(REQUIRED),
  });

  switch (params.masters) {
    case DISTRICT_CONST:
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
      });
      break;
    case TALUKA_CONST:
      num = 6;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        districtId: Yup.number().required(REQUIRED),
      });
      break;
    case FORUM_CONST:
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
      });
      break;
    case JUDGE_CONST:
      num = 7;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        districtId: Yup.number().required(REQUIRED),
        talukaId: Yup.string().required(REQUIRED),
        forum: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
      });
      break;
    case BANK_CONST:
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
      });
      break;
    case DEPARTMENT_CONST:
      num = 2;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        bankId: Yup.string().required(REQUIRED),
      });
      break;
    case BANK_BRANCH_CONST:
      num = 2;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        bankId: Yup.number().required(REQUIRED),
      });
      break;
    case BANK_OFFICER_CONST:
      num = 3;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        mobile: Yup.string()
          .required(REQUIRED)
          .matches(/^\d{10}$/, "Wrong contact format"),
        email: Yup.string().required(REQUIRED).email("Wrong email format"),
        bankId: Yup.string().required(REQUIRED).matches(/^\d+$/, REQUIRED),
      });
      break;
    case ADVOCATE_CONST:
      num = 5;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        mobile: Yup.string()
          .required(REQUIRED)
          .matches(/^\d{10}$/, "Wrong contact format"),
        email: Yup.string().required(REQUIRED).email("Wrong email format"),
      });
      break;
    case ASSOCIATE_ADVOCATE_CONST:
      num = 1;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        mobile: Yup.string()
          .required(REQUIRED)
          .matches(/^\d{10}$/, "Wrong contact format"),
        email: Yup.string().required(REQUIRED).email("Wrong email format"),
        pinCode: Yup.string().required(REQUIRED),
        address1: Yup.string().required(REQUIRED),
        address2: Yup.string().required(REQUIRED),
        districtId: Yup.string().required(REQUIRED),
        talukaId: Yup.string().required(REQUIRED),
      });
      break;
    case EXECUTER_CONST:
      num = 4;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        mobile: Yup.string()
          .required(REQUIRED)
          .matches(/^\d{10}$/, "Wrong contact format"),
        districtId: Yup.string().required(REQUIRED),
        talukaId: Yup.string().required(REQUIRED),
        exeOfficerDesignationId: Yup.string().required(REQUIRED),
      });
      break;
    case EXECUTIVE_OFFICER_DESIGNATION_CONST:
      num = 8;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        desginationId: Yup.string().required(REQUIRED),
      });
      break;
    case PRODUCTS_CONST:
      num = 2;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        bankId: Yup.string().required(REQUIRED),
      });
      break;
    case STAGE_CONST:
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
      });
      break;
    case DESIGNATION_CONST:
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
      });
      break;
    case OPPOSITE_ADVOCATE_CONST:
      num = 9;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        mobile: Yup.string()
          .required(REQUIRED)
          .matches(/^\d{10}$/, "Wrong contact format"),
      });
      break;
    case DISPOSAL_CONST:
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
      });
      break;
    case CASE_TYPE_CONST:
      num = 10;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
        caseCategoryId: Yup.string().required(REQUIRED),
      });
      break;
    case CASE_CATEGORY_CONST:
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string()
          .required(REQUIRED)
          .matches(/^[^.]*$/, NO_DOT_ALLOWED),
      });
      break;
    default:
      break;
  }



  const initialValuesArr = [
    { name: "" },
    { name: "", mobile: "", email: "", pinCode: "", address1: "", address2: "", districtId: "", talukaId: "" },
    { name: "", bankId: "" },
    { name: "", mobile: "", email: "", bankId: "", isSms: false, isEmail: false, isWhatsapp: false },
    { name: "", mobile: "", districtId: "", talukaId: "", exeOfficerDesignationId: "" },
    { name: "", mobile: "", email: "" },
    { name: "", districtId: "" },
    { name: "", forum: "", districtId: "", talukaId: "" },
    { name: "", desginationId: "" },
    { name: "", mobile: "" },
    { name: "", caseCategoryId: "" },
  ];

  const onSubmit = async (values: any, resetForm: Function) => {


    if (params.id) {
      switch (params.masters) {
        case DISTRICT_CONST:
          updateMastersField(UPDATE_DISTRICT_BY_ID, params.masters, values, () => {
            navigate(`${DISTRICT}`);
          });
          break;
        case TALUKA_CONST:
          updateMastersField(UPDATE_TALUKA_BY_ID, params.masters, values, () => {
            navigate(`${TALUKA}`);
          });
          break;
        case FORUM_CONST:
          updateMastersField(UPDATE_FORUM_BY_ID, params.masters, values, () => {
            navigate(`${FORUM}`);
          });
          break;
        case JUDGE_CONST:
          updateMastersField(UPDATE_JUDGE_NAME_BY_ID, params.masters, values, () => {
            navigate(`${JUDGE}`);
          });
          break;
        case BANK_CONST:
          updateMastersField(UPDATE_BANK_BY_ID, params.masters, values, () => {
            navigate(`${BANK}`);
          });
          break;
        case DEPARTMENT_CONST:
          updateMastersField(UPDATE_DEPARTMENT_BY_ID, params.masters, values, () => {
            navigate(`${DEPARTMENT}`);
          });
          break;
        case BANK_BRANCH_CONST:
          updateMastersField(UPDATE_BANK_BRANCH_BY_ID, params.masters, values, () => {
            navigate(`${BANK_BRANCH}`);
          });
          break;
        case BANK_OFFICER_CONST:
          updateMastersField(UPDATE_BANK_OFFICER_BY_ID, params.masters, values, () => {
            navigate(`${BANK_OFFICER}`);
          });
          break;
        case ADVOCATE_CONST:
          updateMastersField(UPDATE_OUR_ADVOCATE_BY_ID, params.masters, values, () => {
            navigate(`${ADVOCATE}`);
          });
          break;
        case ASSOCIATE_ADVOCATE_CONST:
          updateMastersField(UPDATE_ASSOCIATE_ADVOCATE_BY_ID, params.masters, values, () => {
            navigate(`${ASSOCIATE_ADVOCATE}`);
          });
          break;
        case EXECUTER_CONST:
          updateMastersField(UPDATE_EXECUTER_NAME_BY_ID, params.masters, values, () => {
            navigate(`${EXECUTER}`);
          });
          break;
        case EXECUTIVE_OFFICER_DESIGNATION_CONST:
          updateMastersField(UPDATE_EXECUTING_OFFICER_DESIGNATION_BY_ID, params.masters, values, () => {
            navigate(`${EXECUTIVE_OFFICER_DESIGNATION}`);
          });
          break;
        case PRODUCTS_CONST:
          updateMastersField(UPDATE_PRODUCT_BY_ID, params.masters, values, () => {
            navigate(`${PRODUCTS}`);
          });
          break;
        case STAGE_CONST:
          updateMastersField(UPDATE_STAGE_BY_ID, params.masters, values, () => {
            navigate(`${STAGE}`);
          });
          break;
        case DESIGNATION_CONST:
          updateMastersField(UPDATE_DESIGNATION_BY_ID, params.masters, values, () => {
            navigate(`${DESIGNATION}`);
          });
          break;
        case OPPOSITE_ADVOCATE_CONST:
          updateMastersField(UPDATE_OPPOSITE_ADVOCATE_BY_ID, params.masters, values, () => {
            navigate(`${OPPOSITE_ADVOCATE}`);
          });
          break;
        case DISPOSAL_CONST:
          updateMastersField(UPDATE_DISPOSAL_BY_ID, params.masters, values, () => {
            navigate(`${DISPOSAL}`);
          });
          break;
        case CASE_TYPE_CONST:
          updateMastersField(UPDATE_CASE_TYPE_BY_ID, params.masters, values, () => {
            navigate(`${CASE_TYPE}`);
          });
          break;
        case CASE_CATEGORY_CONST:
          updateMastersField(UPDATE_CASE_CATEGORY_BY_ID, params.masters, values, () => {
            navigate(`${CASE_CATEGROY}`);
          });
          break;

        default:
          break;
      }
    } else {
   

      await postDetails(params?.masters, values, () => {
        navigate(`/masters/${params?.masters}`);
        resetForm();
      });
    }
  };

  useEffect(() => {
    if (params.id) {
      switch (params.masters) {
        case DISTRICT_CONST:
          getByIdFields(GET_DISTRICT_BY_ID, params.id);
          break;
        case TALUKA_CONST:
          getByIdFields(GET_TALUKA_BY_ID, params.id);
          break;
        case FORUM_CONST:
          getByIdFields(GET_FORUM_BY_ID, params.id);
          break;
        case JUDGE_CONST:
          getByIdFields(GET_JUDGE_NAME_BY_ID, params.id);
          break;
        case BANK_CONST:
          getByIdFields(GET_BANK_BY_ID, params.id);
          break;
        case DEPARTMENT_CONST:
          getByIdFields(GET_DEPARTMENT_BY_ID, params.id);
          break;
        case BANK_BRANCH_CONST:
          getByIdFields(GET_BANK_BRANCH_BY_ID, params.id);
          break;
        case BANK_OFFICER_CONST:
          getByIdFields(GET_BANK_OFFICER_BY_ID, params.id);
          break;
        case ADVOCATE_CONST:
          getByIdFields(GET_OUR_ADVOCATE_BY_ID, params.id);
          break;
        case ASSOCIATE_ADVOCATE_CONST:
          getByIdFields(GET_ASSOCIATE_ADVOCATE_BY_ID, params.id);
          break;
        case EXECUTER_CONST:
          getByIdFields(GET_EXECUTER_NAME_BY_ID, params.id);
          break;
        case EXECUTIVE_OFFICER_DESIGNATION_CONST:
          getByIdFields(GET_EXECUTING_OFFICER_DESIGNATION_BY_ID, params.id);
          break;
        case PRODUCTS_CONST:
          getByIdFields(GET_PRODUCT_BY_ID, params.id);
          break;
        case STAGE_CONST:
          getByIdFields(GET_STAGE_BY_ID, params.id);
          break;
        case DESIGNATION_CONST:
          getByIdFields(GET_DESIGNATION_BY_ID, params.id);
          break;
        case OPPOSITE_ADVOCATE_CONST:
          getByIdFields(GET_OPPOSITE_ADVOCATE_BY_ID, params.id);
          break;
        case DISPOSAL_CONST:
          getByIdFields(GET_DISPOSAL_BY_ID, params.id);
          break;
        case CASE_TYPE_CONST:
          getByIdFields(GET_CASE_TYPE_BY_ID, params.id);
          break;
        case CASE_CATEGORY_CONST:
          getByIdFields(GET_CASE_CATEGORY_BY_ID, params.id);
          break;
        default:
          break;
      }
    }

    params.masters === TALUKA_CONST && getDistrictList();
    params.masters === BANK_BRANCH_CONST && getBankList();
    params.masters === PRODUCTS_CONST && getBankList();
    params.masters === BANK_OFFICER_CONST && getBankList();
    params.masters === DEPARTMENT_CONST && getBankList();
    params.masters === JUDGE_CONST && getForumList();
    params.masters === JUDGE_CONST && getDistrictList();
    params.masters === EXECUTER_CONST && getExeOffDesignation();

    params.masters === EXECUTIVE_OFFICER_DESIGNATION_CONST && getDesignationList();
    params.masters === EXECUTER_CONST && getDistrictList();
    params.masters === CASE_TYPE_CONST && getCaseCatList();

    // getDistrictList();
  }, [getByIdFields, getDistrictList, getBankList, getForumList, getCaseCatList, getDesignationList, getExeOffDesignation, params]);

  useEffect(() => {
    if (params.id && params.masters === BANK_OFFICER_CONST && details.data) {
      getBranchList(details?.data?.bankId);
    }
    if (params.id && params.masters === (JUDGE_CONST || EXECUTER_CONST) && details?.data) {
      getTalukaList(details?.data?.districtId);
    }
  }, [details?.data, params.id, params.masters, getBranchList, getTalukaList]);

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 align-items-center">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0 text-capitalize">
            {`${params.id ? "Update " : "Add"}`} {params.masters?.replace(/-/g, " ")}
          </h3>
        </div>
      </div>

      <Formik
        initialValues={params.id ? details?.data : initialValuesArr[num]}
        onSubmit={(values: any, { resetForm }) => onSubmit(values, resetForm)}
        enableReinitialize={true}
        validationSchema={validateFun}
        render={({ values, setFieldValue, errors, touched, resetForm }) => (
          <Form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate id="kt_login_signup_form">
            {values ? (
              <div className="card-body border-top p-9">
                {params.masters === DISTRICT_CONST && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">District Name</label>
                    <div className="col-lg-8">
                      <Field
                        placeholder={"District Name"}
                        type="text"
                        name={"name"}
                        autoComplete="off"
                        className={clsx(
                          "form-control bg-transparent",
                          {
                            "is-invalid": touched.name && errors.name,
                          },
                          {
                            "is-valid": touched.name && !errors.name,
                          }
                        )}
                      />
                      {errors.name && touched.name && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">{`${errors.name}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {params.masters === TALUKA_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">District Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"districtId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.districtId && errors.districtId,
                            },
                            {
                              "is-valid": touched.districtId && !errors.districtId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("districtId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select District
                          </option>
                          {!districtList?.data && "Loading..."}
                          {districtList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.districtId && errors.districtId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.districtId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Taluka Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Taluka Name"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === EXECUTIVE_OFFICER_DESIGNATION_CONST && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Executive Officer Designation</label>
                    <div className="col-lg-8">
                      <Field
                        placeholder={"Executive Officer Designation"}
                        type="text"
                        name={"name"}
                        autoComplete="off"
                        className={clsx(
                          "form-control bg-transparent",
                          {
                            "is-invalid": touched.name && errors.name,
                          },
                          {
                            "is-valid": touched.name && !errors.name,
                          }
                        )}
                      />
                      {touched.name && errors.name && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">{`${errors.name}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {params.masters === CASE_TYPE_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Case Category</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"caseCategoryId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.caseCategoryId && errors.caseCategoryId,
                            },
                            {
                              "is-valid": touched.caseCategoryId && !errors.caseCategoryId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("caseCategoryId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select Category
                          </option>
                          {!caseCatList?.data && "Loading..."}
                          {caseCatList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.caseCategoryId && errors.caseCategoryId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.caseCategoryId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Case Type</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Case Type"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === DEPARTMENT_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"bankId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.bankId && errors.bankId,
                            },
                            {
                              "is-valid": touched.bankId && !errors.bankId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("bankId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select Bank
                          </option>
                          {!bankList?.data && "Loading..."}
                          {bankList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.bankId && errors.bankId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.bankId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Department Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Department Name"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === JUDGE_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">District Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"districtId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.districtId && errors.districtId,
                            },
                            {
                              "is-valid": touched.districtId && !errors.districtId,
                            }
                          )}
                          onChange={(e: any) => {
                            getTalukaList(e.target.value);
                            setFieldValue("districtId", e.target.value);
                            setFieldValue("talukaId", "");
                          }}
                        >
                          <option value="" disabled>
                            Select District
                          </option>
                          {!districtList?.data && "Loading..."}
                          {districtList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.districtId && errors.districtId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.districtId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Taluka Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"talukaId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.talukaId && errors.talukaId,
                            },
                            {
                              "is-valid": touched.talukaId && !errors.talukaId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("talukaId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select Taluka
                          </option>
                          {!talukaList?.data && "Loading..."}
                          {talukaList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.talukaId && errors.talukaId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.talukaId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Forum</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Forum`}
                          type={"text"}
                          name={"forum"}
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.forum && errors.forum,
                            },
                            {
                              "is-valid": touched.forum && !errors.forum,
                            }
                          )}
                        />
                        {touched.forum && errors.forum && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.forum}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Judge Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Judge Name"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === FORUM_CONST && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Forum Name</label>
                    <div className="col-lg-8">
                      <Field
                        placeholder={"Forum Name"}
                        type="text"
                        name={"name"}
                        autoComplete="off"
                        className={clsx(
                          "form-control bg-transparent",
                          {
                            "is-invalid": touched.name && errors.name,
                          },
                          {
                            "is-valid": touched.name && !errors.name,
                          }
                        )}
                      />
                      {touched.name && errors.name && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">{`${errors.name}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {params.masters === BANK_BRANCH_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"bankId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.bankId && errors.bankId,
                            },
                            {
                              "is-valid": touched.bankId && !errors.bankId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("bankId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select Bank
                          </option>
                          {!bankList?.data && "Loading..."}
                          {bankList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.bankId && errors.bankId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.bankId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Bank Branch Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Bank Branch Name"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === BANK_CONST && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Bank Name</label>
                    <div className="col-lg-8">
                      <Field
                        placeholder={"Bank Name"}
                        type="text"
                        name={"name"}
                        autoComplete="off"
                        className={clsx(
                          "form-control bg-transparent",
                          {
                            "is-invalid": touched.name && errors.name,
                          },
                          {
                            "is-valid": touched.name && !errors.name,
                          }
                        )}
                      />
                      {touched.name && errors.name && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">{`${errors.name}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {params.masters === BANK_OFFICER_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Bank`}
                          type="text"
                          as="select"
                          name={"bankId"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.bankId && errors.bankId,
                            },
                            {
                              "is-valid": touched.bankId && !errors.bankId,
                            }
                          )}
                          onChange={(e: any) => {
                            getBranchList(e.target.value);
                            setFieldValue("bankId", e.target.value);
                          }}
                        >
                          <option value="" disabled>
                            Select Bank
                          </option>
                          {!bankList?.data && "Loading..."}
                          {bankList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>

                        {touched.bankId && errors.bankId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.bankId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Bank Officer Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Bank Officer Name"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Mobile</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Mobile`}
                          type="text"
                          name={"mobile"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.mobile && errors.mobile,
                            },
                            {
                              "is-valid": touched.mobile && !errors.mobile,
                            }
                          )}
                        />
                        {touched.mobile && errors.mobile && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.mobile}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Email</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Email`}
                          type="text"
                          name={"email"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.email && errors.email,
                            },
                            {
                              "is-valid": touched.email && !errors.email,
                            }
                          )}
                        />
                        {touched.email && errors.email && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.email}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6">Platform</label>
                      <div className="col-lg-8">
                        <div className="d-flex fw-semibold h-100">
                          <div className="form-check form-check-custom form-check-solid me-9">
                            <Field type="checkbox" name="isSms" className="form-check-input" id="isSms" />
                            <label className="form-check-label ms-3" htmlFor="isSms">
                              isSms
                            </label>
                          </div>

                          <div className="form-check form-check-custom form-check-solid me-9">
                            <Field type="checkbox" name="isWhatsapp" className="form-check-input" id="isWhatsapp" />
                            <label className="form-check-label ms-3" htmlFor="isWhatsapp">
                              isWhatsapp
                            </label>
                          </div>

                          <div className="form-check form-check-custom form-check-solid">
                            <Field type="checkbox" name="isEmail" className="form-check-input" id="isEmail" />
                            <label className="form-check-label ms-3" htmlFor="isEmail">
                              isEmail
                            </label>
                          </div>
                        </div>
                        {/* {touched.email && errors.email && (
                            <div className="fv-plugins-message-container">
                              <div className="fv-help-block">
                                <span role="alert">{`${errors.email}`}</span>
                              </div>
                            </div>
                          )} */}
                      </div>
                    </div>

                    {/* {branchList?.data && (
                      <div className="row mb-6">
                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank Branch</label>
                        <div className="col-lg-8">
                          <Field
                            placeholder={`Bank Branch`}
                            type="text"
                            as="select"
                            name={"bankBranchId"}
                            autoComplete="off"
                            className={clsx(
                              "form-control bg-transparent form-select",
                              {
                                "is-invalid": touched.bankBranchId && errors.bankBranchId,
                              },
                              {
                                "is-valid": touched.bankBranchId && !errors.bankBranchId,
                              }
                            )}
                            onChange={(e: any) => {
                              setFieldValue("bankBranchId", e.target.value);
                            }}
                          >
                            <option value="" disabled>
                              Select Bank Branch
                            </option>
                            <>
                              {!branchList?.data && "Loading..."}
                              {!branchList?.data?.length && <option>No Data Found</option>}
                              {branchList?.data?.map((list: any, i: any) => {
                                return (
                                  <>
                                    {!params.id && list.isActive === true && (
                                      <option key={i} value={list.id}>
                                        {list.name}
                                      </option>
                                    )}
                                    {params.id && (
                                      <option key={i} value={list.id}>
                                        {list.name}
                                      </option>
                                    )}
                                  </>
                                );
                              })}
                            </>
                          </Field>
                          {touched.bankBranchId && errors.bankBranchId && (
                            <div className="fv-plugins-message-container">
                              <div className="fv-help-block">
                                <span role="alert">{`${errors.bankBranchId}`}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )} */}
                  </>
                )}
                {params.masters === ADVOCATE_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Mobile</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Mobile`}
                          type="text"
                          name={"mobile"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.mobile && errors.mobile,
                            },
                            {
                              "is-valid": touched.mobile && !errors.mobile,
                            }
                          )}
                        />
                        {touched.mobile && errors.mobile && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.mobile}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Email</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Email`}
                          type="text"
                          name={"email"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.email && errors.email,
                            },
                            {
                              "is-valid": touched.email && !errors.email,
                            }
                          )}
                        />
                        {touched.email && errors.email && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.email}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === ASSOCIATE_ADVOCATE_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">District Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"districtId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.districtId && errors.districtId,
                            },
                            {
                              "is-valid": touched.districtId && !errors.districtId,
                            }
                          )}
                          onChange={(e: any) => {
                            getTalukaList(e.target.value);
                            setFieldValue("districtId", e.target.value);
                            setFieldValue("talukaId", "");
                          }}
                        >
                          <option value="" disabled>
                            Select District
                          </option>
                          {!districtList?.data && "Loading..."}
                          {districtList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.districtId && errors.districtId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.districtId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Taluka Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"talukaId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.talukaId && errors.talukaId,
                            },
                            {
                              "is-valid": touched.talukaId && !errors.talukaId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("talukaId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select Taluka
                          </option>
                          {!talukaList?.data && "Loading..."}
                          {talukaList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.talukaId && errors.talukaId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.talukaId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Associate Advocate Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Associate Advocate Name"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Pin Code</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Pin Code`}
                          type="text"
                          name={"pinCode"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.pinCode && errors.pinCode,
                            },
                            {
                              "is-valid": touched.pinCode && !errors.pinCode,
                            }
                          )}
                        />
                        {touched.pinCode && errors.pinCode && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.pinCode}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Address Line 1</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Address Line 1`}
                          type="text"
                          name={"address1"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.address1 && errors.address1,
                            },
                            {
                              "is-valid": touched.address1 && !errors.address1,
                            }
                          )}
                        />
                        {touched.address1 && errors.address1 && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.address1}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Address Line 2</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Address Line 2`}
                          type="text"
                          name={"address2"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.address2 && errors.address2,
                            },
                            {
                              "is-valid": touched.address2 && !errors.address2,
                            }
                          )}
                        />
                        {touched.address2 && errors.address2 && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.address2}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Mobile</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Mobile`}
                          type="text"
                          name={"mobile"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.mobile && errors.mobile,
                            },
                            {
                              "is-valid": touched.mobile && !errors.mobile,
                            }
                          )}
                        />
                        {touched.mobile && errors.mobile && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.mobile}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Email</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Email`}
                          type="text"
                          name={"email"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.email && errors.email,
                            },
                            {
                              "is-valid": touched.email && !errors.email,
                            }
                          )}
                        />
                        {touched.email && errors.email && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.email}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === EXECUTER_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">District Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"districtId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.districtId && errors.districtId,
                            },
                            {
                              "is-valid": touched.districtId && !errors.districtId,
                            }
                          )}
                          onChange={(e: any) => {
                            getTalukaList(e.target.value);
                            setFieldValue("districtId", e.target.value);
                            setFieldValue("talukaId", "");
                          }}
                        >
                          <option value="" disabled>
                            Select District
                          </option>
                          {!districtList?.data && "Loading..."}
                          {districtList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.districtId && errors.districtId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.districtId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Taluka Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"talukaId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.talukaId && errors.talukaId,
                            },
                            {
                              "is-valid": touched.talukaId && !errors.talukaId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("talukaId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select Taluka
                          </option>
                          {!talukaList?.data && "Loading..."}
                          {talukaList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.talukaId && errors.talukaId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.talukaId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Executive Officer Designation</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"exeOfficerDesignationId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.exeOfficerDesignationId && errors.exeOfficerDesignationId,
                            },
                            {
                              "is-valid": touched.exeOfficerDesignationId && !errors.exeOfficerDesignationId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("exeOfficerDesignationId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select Designation
                          </option>
                          {!exeOffDesignationList?.data && "Loading..."}
                          {exeOffDesignationList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.exeOfficerDesignationId && errors.exeOfficerDesignationId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.exeOfficerDesignationId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Executer Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Executer Name"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Mobile</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Mobile`}
                          type="text"
                          name={"mobile"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.mobile && errors.mobile,
                            },
                            {
                              "is-valid": touched.mobile && !errors.mobile,
                            }
                          )}
                        />
                        {touched.mobile && errors.mobile && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.mobile}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === OPPOSITE_ADVOCATE_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Opposite Advocate Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Opposite Advocate Name`}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Mobile</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Mobile`}
                          type="text"
                          name={"mobile"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.mobile && errors.mobile,
                            },
                            {
                              "is-valid": touched.mobile && !errors.mobile,
                            }
                          )}
                        />
                        {touched.mobile && errors.mobile && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.mobile}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === PRODUCTS_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank Name</label>
                      <div className="col-lg-8">
                        <Field
                          as="select"
                          name={"bankId"}
                          className={clsx(
                            "form-control bg-transparent form-select",
                            {
                              "is-invalid": touched.bankId && errors.bankId,
                            },
                            {
                              "is-valid": touched.bankId && !errors.bankId,
                            }
                          )}
                          onChange={(e: any) => setFieldValue("bankId", e.target.value)}
                        >
                          <option value="" disabled>
                            Select Bank
                          </option>
                          {!bankList?.data && "Loading..."}
                          {bankList?.data?.map((list: any, i: any) => {
                            return (
                              <>
                                {!params.id && list.isActive === true && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                                {params.id && (
                                  <option key={i} value={list.id}>
                                    {list.name}
                                  </option>
                                )}
                              </>
                            );
                          })}
                        </Field>
                        {touched.bankId && errors.bankId && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.bankId}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Product Name</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Product Name"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === CASE_CATEGORY_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Case Category</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Case Category"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === DISPOSAL_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Disposal Type</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Disposal Type"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === DESIGNATION_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Designation</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Designation"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === STAGE_CONST && (
                  <>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">Stage</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={"Stage"}
                          type="text"
                          name={"name"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.name && errors.name,
                            },
                            {
                              "is-valid": touched.name && !errors.name,
                            }
                          )}
                        />
                        {touched.name && errors.name && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.name}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}

                {/* <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required text-capitalize">{params.masters?.replace(/-/g, " ")} Name</label>
                    <div className="col-lg-8">
                      <Field
                        placeholder={`${capitalizeFirstLetter(params.masters?.replace(/-/g, " "))} Name`}
                        type="text"
                        name={"name"}
                        autoComplete="off"
                        className={clsx(
                          "form-control bg-transparent",
                          {
                            "is-invalid": touched.name && errors.name,
                          },
                          {
                            "is-valid": touched.name && !errors.name,
                          }
                        )}
                      />
                      {touched.name && errors.name && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">{`${errors.name}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div> */}
              </div>
            ) : (
              <Loader />
            )}

            <div className="card-footer d-flex justify-content-end py-6 px-9 ">
              <button
                type="button"
                id="kt_login_password_reset_form_cancel_button"
                className="btn btn-light me-4 btn-active-light-primary"
                disabled={loading}
                onClick={() => navigate(`/masters/${params?.masters?.replace("add-", "")}`)}
              >
                {DISCARD}
              </button>
              <button type="submit" className="btn btn-primary">
                {!loading && <span className="indicator-label">{SUBMIT}</span>}
                {loading && PLEASE_WAIT}
              </button>
            </div>
          </Form>
        )}
      />
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loadingFields: state.getByIdReducer.loading,
    error: state.getByIdReducer.error,
    details: state.getByIdReducer.details,

    bankList: state.getBankForDropdownReducer.bankList,
    districtList: state.getDistrictForDropdownReducer.districtList,
    branchList: state.getBankBranchByBankIdReducer.branchList,
    forumList: state.getForumForDropdownReducer.forumList,
    designationList: state.getDesignationForDropdownReducer.designation,
    talukaList: state.getTalukaByDistrictIdReducer.talukaList,
    caseCatList: state.getCaseCatForDropdownReducer.caseCatList,
    exeOffDesignationList: state.getExeOffDesignationDropdownReducer.exeOffDesignationList,

    loadingPost: state.postMasterDataReducer.loading,
    loadingPut: state.updateMasterReducer.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getByIdFields: (url: any, id: any) => dispatch(getById(url, id)),
    postDetails: (masters: string, detail: any, callback: Function) => {
      switch (masters) {
        case DISTRICT_CONST:
          dispatch(postDistrict(detail, callback));
          break;
        case TALUKA_CONST:
          dispatch(postTaluka(detail, callback));
          break;
        case FORUM_CONST:
          dispatch(postForum(detail, callback));
          break;
        case JUDGE_CONST:
          dispatch(postJudgeName(detail, callback));
          break;
        case BANK_CONST:
          dispatch(postBank(detail, callback));
          break;
        case DEPARTMENT_CONST:
          dispatch(postDepartment(detail, callback));
          break;
        case BANK_BRANCH_CONST:
          dispatch(postBankBranch(detail, callback));
          break;
        case BANK_OFFICER_CONST:
          dispatch(postBankOfficer(detail, callback));
          break;
        case ADVOCATE_CONST:
          dispatch(postOurAdvocate(detail, callback));
          break;
        case ASSOCIATE_ADVOCATE_CONST:
          dispatch(postAssociateAdvocate(detail, callback));
          break;
        case EXECUTER_CONST:
          dispatch(postExecuterName(detail, callback));
          break;
        case EXECUTIVE_OFFICER_DESIGNATION_CONST:
          dispatch(postExecutingOfficerDesignation(detail, callback));
          break;
        case PRODUCTS_CONST:
          dispatch(postProduct(detail, callback));
          break;
        case STAGE_CONST:
          dispatch(postStage(detail, callback));
          break;
        case DESIGNATION_CONST:
          dispatch(postDesgination(detail, callback));
          break;
        case OPPOSITE_ADVOCATE_CONST:
          dispatch(postOppsiteAdvocate(detail, callback));
          break;
        case DISPOSAL_CONST:
          dispatch(postDisposal(detail, callback));
          break;
        case CASE_TYPE_CONST:
          dispatch(postCaseType(detail, callback));
          break;
        case CASE_CATEGORY_CONST:
          dispatch(postCaseCategory(detail, callback));
          break;
        default:
          break;
      }
    },

    getBranchList: (id: any) => dispatch(fetchBankBranchByBankId(id)),
    getDistrictList: () => dispatch(fetchDistrictForDropdown()),
    getBankList: () => dispatch(fetchBankForDropdown()),
    getForumList: () => dispatch(fetchForumDropdown()),
    getDesignationList: () => dispatch(fetchDesignationDropdown()),
    getTalukaList: (id: any) => dispatch(fetchTalukaByDistrictId(id)),
    getCaseCatList: () => dispatch(fetchCaseCategoryForDropdown()),
    getExeOffDesignation: () => dispatch(fetchExeOffDesignationForDropdown()),

    updateMastersField: (url: any, master: any, values: any, callback: Function) => dispatch(updateMasters(url, master, values, callback)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(EditDetails);
export default connectComponent;
