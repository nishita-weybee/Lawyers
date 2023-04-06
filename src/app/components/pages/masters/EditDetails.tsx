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
  GET_DEPARTMENT_BY_ID,
  GET_DISTRICT_BY_ID,
  GET_EXECUTER_NAME_BY_ID,
  GET_EXECUTING_OFFICER_DESIGNATION_BY_ID,
  GET_FORUM_BY_ID,
  GET_JUDGE_NAME_BY_ID,
  GET_OUR_ADVOCATE_BY_ID,
  GET_PRODUCT_BY_ID,
  GET_STAGE_BY_ID,
  GET_TALUKA_BY_ID,
  UPDATE_ASSOCIATE_ADVOCATE_BY_ID,
  UPDATE_BANK_BRANCH_BY_ID,
  UPDATE_BANK_BY_ID,
  UPDATE_BANK_OFFICER_BY_ID,
  UPDATE_DEPARTMENT_BY_ID,
  UPDATE_DISTRICT_BY_ID,
  UPDATE_EXECUTER_NAME_BY_ID,
  UPDATE_EXECUTING_OFFICER_DESIGNATION_BY_ID,
  UPDATE_FORUM_BY_ID,
  UPDATE_JUDGE_NAME_BY_ID,
  UPDATE_OUR_ADVOCATE_BY_ID,
  UPDATE_PRODUCT_BY_ID,
  UPDATE_STAGE_BY_ID,
  UPDATE_TALUKA_BY_ID,
} from "../../../helpers/config";
import { DISCARD, PLEASE_WAIT, SUBMIT } from "../../../helpers/globalConstant";
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
}) => {
  const params = useParams();
  const navigate = useNavigate();
  // const location = useLocation();
  const loading = params.id ? loadingPut : loadingPost;

  let num = 0;
  let validateFun = Yup.object().shape({
    name: Yup.string().required("Required"),
  });

  switch (params.masters) {
    case "district":
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
      });
      break;
    case "taluka":
      num = 6;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
        districtId: Yup.number().required("Required"),
      });
      break;
    case "forum":
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
      });
      break;
    case "judge":
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
      });
      break;
    case "bank-details":
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
      });
      break;
    case "department":
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
      });
      break;
    case "bank-branch":
      num = 2;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
        bankId: Yup.number().required("Required"),
      });
      break;
    case "bank-officer":
      num = 3;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
        mobile: Yup.string()
          .required("Required")
          .matches(/^\d{10}$/, "Wrong contact format"),
        email: Yup.string().required("Required").email("Wrong email format"),
        bankId: Yup.string().required("Required").matches(/^\d+$/, "Required"),
        bankBranchId: Yup.string().required("Required").matches(/^\d+$/, "Required"),
      });
      break;
    case "advocate":
      num = 5;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
        mobile: Yup.string()
          .required("Required")
          .matches(/^\d{10}$/, "Wrong contact format"),
        email: Yup.string().required("Required").email("Wrong email format"),
      });
      break;
    case "associate-advocate":
      num = 1;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
        mobile: Yup.string()
          .required("Required")
          .matches(/^\d{10}$/, "Wrong contact format"),
        email: Yup.string().required("Required").email("Wrong email format"),
        postalAddress: Yup.string().required("Required"),
      });
      break;
    case "executer":
      num = 4;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
        mobile: Yup.string()
          .required("Required")
          .matches(/^\d{10}$/, "Wrong contact format"),
      });
      break;
    case "executive-officer-designation":
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
      });
      break;
    case "products":
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
      });
      break;
    case "stage":
      num = 0;
      validateFun = Yup.object().shape({
        name: Yup.string().required("Required"),
      });
      break;
    default:
      break;
  }

  const initialValuesArr = [
    { name: "" },
    { name: "", mobile: "", email: "", postalAddress: "" },
    { name: "", bankId: "" },
    { name: "", mobile: "", email: "", bankBranchId: "", bankId: "" },
    { name: "", mobile: "" },
    { name: "", mobile: "", email: "" },
    { name: "", districtId: "" },
    { name: "", forumId: "" },
  ];

  const onSubmit = async (values: any, resetForm: Function) => {
    if (params.id) {
      switch (params.masters) {
        case "district":
          updateMastersField(UPDATE_DISTRICT_BY_ID, params.masters, values, () => {
            navigate(`${DISTRICT}`);
          });
          break;
        case "taluka":
          updateMastersField(UPDATE_TALUKA_BY_ID, params.masters, values, () => {
            navigate(`${TALUKA}`);
          });
          break;
        case "forum":
          updateMastersField(UPDATE_FORUM_BY_ID, params.masters, values, () => {
            navigate(`${FORUM}`);
          });
          break;
        case "judge":
          updateMastersField(UPDATE_JUDGE_NAME_BY_ID, params.masters, values, () => {
            navigate(`${JUDGE}`);
          });
          break;
        case "bank-details":
          updateMastersField(UPDATE_BANK_BY_ID, params.masters, values, () => {
            navigate(`${BANK}`);
          });
          break;
        case "department":
          updateMastersField(UPDATE_DEPARTMENT_BY_ID, params.masters, values, () => {
            navigate(`${DEPARTMENT}`);
          });
          break;
        case "bank-branch":
          updateMastersField(UPDATE_BANK_BRANCH_BY_ID, params.masters, values, () => {
            navigate(`${BANK_BRANCH}`);
          });
          break;
        case "bank-officer":
          updateMastersField(UPDATE_BANK_OFFICER_BY_ID, params.masters, values, () => {
            navigate(`${BANK_OFFICER}`);
          });
          break;
        case "advocate":
          updateMastersField(UPDATE_OUR_ADVOCATE_BY_ID, params.masters, values, () => {
            navigate(`${ADVOCATE}`);
          });
          break;
        case "associate-advocate":
          updateMastersField(UPDATE_ASSOCIATE_ADVOCATE_BY_ID, params.masters, values, () => {
            navigate(`${ASSOCIATE_ADVOCATE}`);
          });
          break;
        case "executer":
          updateMastersField(UPDATE_EXECUTER_NAME_BY_ID, params.masters, values, () => {
            navigate(`${EXECUTER}`);
          });
          break;
        case "executive-officer-designation":
          updateMastersField(UPDATE_EXECUTING_OFFICER_DESIGNATION_BY_ID, params.masters, values, () => {
            navigate(`${EXECUTIVE_OFFICER_DESIGNATION}`);
          });
          break;
        case "products":
          updateMastersField(UPDATE_PRODUCT_BY_ID, params.masters, values, () => {
            navigate(`${PRODUCTS}`);
          });
          break;
        case "stage":
          updateMastersField(UPDATE_STAGE_BY_ID, params.masters, values, () => {
            navigate(`${STAGE}`);
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
        case "district":
          getByIdFields(GET_DISTRICT_BY_ID, params.id);
          break;
        case "taluka":
          getByIdFields(GET_TALUKA_BY_ID, params.id);
          break;
        case "forum":
          getByIdFields(GET_FORUM_BY_ID, params.id);
          break;
        case "judge":
          getByIdFields(GET_JUDGE_NAME_BY_ID, params.id);
          break;
        case "bank-details":
          getByIdFields(GET_BANK_BY_ID, params.id);
          break;
        case "department":
          getByIdFields(GET_DEPARTMENT_BY_ID, params.id);
          break;
        case "bank-branch":
          getByIdFields(GET_BANK_BRANCH_BY_ID, params.id);
          break;
        case "bank-officer":
          getByIdFields(GET_BANK_OFFICER_BY_ID, params.id);
          break;
        case "advocate":
          getByIdFields(GET_OUR_ADVOCATE_BY_ID, params.id);
          break;
        case "associate-advocate":
          getByIdFields(GET_ASSOCIATE_ADVOCATE_BY_ID, params.id);
          break;
        case "executer":
          getByIdFields(GET_EXECUTER_NAME_BY_ID, params.id);
          break;
        case "executive-officer-designation":
          getByIdFields(GET_EXECUTING_OFFICER_DESIGNATION_BY_ID, params.id);
          break;
        case "products":
          getByIdFields(GET_PRODUCT_BY_ID, params.id);
          break;
        case "stage":
          getByIdFields(GET_STAGE_BY_ID, params.id);
          break;
        default:
          break;
      }
    }
    params.masters === "taluka" && getDistrictList();
    params.masters === "bank-branch" && getBankList();
    params.masters === "bank-officer" && getBankList();
    params.masters === "judge" && getForumList();
  }, []);

  useEffect(() => {
    if (params.id && params.masters === "bank-officer" && details.data) {
      getBranchList(details?.data?.bankId);
    }
  }, [details?.data, params.id, params.masters, getBranchList]);

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
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6 required">Name</label>
                  <div className="col-lg-8">
                    <Field
                      placeholder={`Name`}
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
                {params.masters === "taluka" && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required">District</label>
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
                            <span role="alert">{`${errors.name}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {params.masters === "judge" && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required">Forum</label>
                    <div className="col-lg-8">
                      <Field
                        as="select"
                        name={"forumId"}
                        className={clsx(
                          "form-control bg-transparent form-select",
                          {
                            "is-invalid": touched.forumId && errors.forumId,
                          },
                          {
                            "is-valid": touched.forumId && !errors.forumId,
                          }
                        )}
                        onChange={(e: any) => setFieldValue("forumId", e.target.value)}
                      >
                        <option value="" disabled>
                          Select Forum
                        </option>

                        {!forumList.data && "Loading..."}
                        {forumList?.data?.map((list: any, i: any) => {
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
                      {touched.forumId && errors.forumId && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">
                            <span role="alert">{`${errors.name}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {params.masters === "bank-branch" && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank</label>
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
                            <span role="alert">{`${errors.name}`}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {params.masters === "bank-officer" && (
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
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank</label>
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
                            setFieldValue("bankBranchId", "");
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

                    {branchList?.data && (
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
                    )}
                  </>
                )}
                {params.masters === "advocate" && (
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
                {params.masters === "associate-advocate" && (
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
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Address</label>
                      <div className="col-lg-8">
                        <Field
                          placeholder={`Address`}
                          type="text"
                          name={"postalAddress"}
                          autoComplete="off"
                          className={clsx(
                            "form-control bg-transparent",
                            {
                              "is-invalid": touched.postalAddress && errors.postalAddress,
                            },
                            {
                              "is-valid": touched.postalAddress && !errors.postalAddress,
                            }
                          )}
                        />
                        {touched.postalAddress && errors.postalAddress && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              <span role="alert">{`${errors.postalAddress}`}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </>
                )}
                {params.masters === "executer" && (
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
                )}
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

    loadingPost: state.postMasterDataReducer.loading,
    loadingPut: state.updateMasterReducer.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getByIdFields: (url: any, id: any) => dispatch(getById(url, id)),
    postDetails: (masters: string, detail: any, callback: Function) => {
      switch (masters) {
        case "district":
          dispatch(postDistrict(detail, callback));
          break;
        case "taluka":
          dispatch(postTaluka(detail, callback));
          break;
        case "forum":
          dispatch(postForum(detail, callback));
          break;
        case "judge":
          dispatch(postJudgeName(detail, callback));
          break;
        case "bank-details":
          dispatch(postBank(detail, callback));
          break;
        case "department":
          dispatch(postDepartment(detail, callback));
          break;
        case "bank-branch":
          dispatch(postBankBranch(detail, callback));
          break;
        case "bank-officer":
          dispatch(postBankOfficer(detail, callback));
          break;
        case "advocate":
          dispatch(postOurAdvocate(detail, callback));
          break;
        case "associate-advocate":
          dispatch(postAssociateAdvocate(detail, callback));
          break;
        case "executer":
          dispatch(postExecuterName(detail, callback));
          break;
        case "executive-officer-designation":
          dispatch(postExecutingOfficerDesignation(detail, callback));
          break;
        case "products":
          dispatch(postProduct(detail, callback));
          break;
        case "stage":
          dispatch(postStage(detail, callback));
          break;
        default:
          break;
      }
    },

    getBranchList: (id: any) => dispatch(fetchBankBranchByBankId(id)),
    getDistrictList: () => dispatch(fetchDistrictForDropdown()),
    getBankList: () => dispatch(fetchBankForDropdown()),
    getForumList: () => dispatch(fetchForumDropdown()),

    updateMastersField: (url: any, master: any, values: any, callback: Function) => dispatch(updateMasters(url, master, values, callback)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(EditDetails);
export default connectComponent;
