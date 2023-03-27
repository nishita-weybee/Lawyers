import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
  UPDATE_TALUKA_BY_ID,
} from "../../../helpers/config";
import { ADVOCATE, DISCARD, PLEASE_WAIT, SUBMIT } from "../../../helpers/globalConstant";
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
} from "../../../helpers/routesConstant";
import {
  fetchBankBranchByBankId,
  updateMasters,
  getById,
  fetchDistrictForDropdown,
  fetchBankForDropdown,
} from "../../../reducers/mastersReducers/mastersAction";

export interface props {
  details: any;
  error: any;
  loading: boolean;
  getByIdFields: Function;

  branchList: any;
  districtList: any;
  bankList: any;
  getBankList: Function;
  getDistrictList: Function;
  getBranchList: Function;

  updateMastersField: Function;
}

const EditDetails: React.FC<props> = ({
  details,
  loading,
  getByIdFields,

  updateMastersField,
  branchList,
  districtList,
  bankList,
  getBankList,
  getDistrictList,
  getBranchList,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit = (values: any) => {
    switch (params.masters) {
      case "district":
        updateMastersField(UPDATE_DISTRICT_BY_ID, values, () => {
          navigate(`${DISTRICT}`);
        });
        break;
      case "taluka":
        updateMastersField(UPDATE_TALUKA_BY_ID, values, () => {
          navigate(`${TALUKA}`);
        });
        break;
      case "forum":
        updateMastersField(UPDATE_FORUM_BY_ID, values, () => {
          navigate(`${FORUM}`);
        });
        break;
      case "judge":
        updateMastersField(UPDATE_JUDGE_NAME_BY_ID, values, () => {
          navigate(`${JUDGE}`);
        });
        break;
      case "bank-details":
        updateMastersField(UPDATE_BANK_BY_ID, values, () => {
          navigate(`${BANK}`);
        });
        break;
      case "department":
        updateMastersField(UPDATE_DEPARTMENT_BY_ID, values, () => {
          navigate(`${DEPARTMENT}`);
        });
        break;
      case "bank-branch":
        updateMastersField(UPDATE_BANK_BRANCH_BY_ID, values, () => {
          navigate(`${BANK_BRANCH}`);
        });
        break;
      case "bank-officer":
        updateMastersField(UPDATE_BANK_OFFICER_BY_ID, values, () => {
          navigate(`${BANK_OFFICER}`);
        });
        break;
      case "advocate":
        updateMastersField(UPDATE_OUR_ADVOCATE_BY_ID, values, () => {
          navigate(`${ADVOCATE}`);
        });
        break;
      case "associate-advocate":
        updateMastersField(UPDATE_ASSOCIATE_ADVOCATE_BY_ID, values, () => {
          navigate(`${ASSOCIATE_ADVOCATE}`);
        });
        break;
      case "executer":
        updateMastersField(UPDATE_EXECUTER_NAME_BY_ID, values, () => {
          navigate(`${EXECUTER}`);
        });
        break;
      case "executive-officer-designation":
        updateMastersField(UPDATE_EXECUTING_OFFICER_DESIGNATION_BY_ID, values, () => {
          navigate(`${EXECUTIVE_OFFICER_DESIGNATION}`);
        });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
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
      default:
        break;
    }
    params.masters === "taluka" && getDistrictList();
    params.masters === "bank-branch" && getBankList();
    params.masters === "bank-officer" && getBankList();
  }, [params.id, params.masters, getByIdFields]);

  console.log(districtList, "districtList");
  console.log(branchList, "branchList");
  console.log(bankList, "  bankList");

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 align-items-center">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0 text-capitalize">{`Update ${params.masters?.replace(/-/, " ")}`}</h3>
        </div>
      </div>

      {details.data && (
        <Formik
          initialValues={details?.data}
          onSubmit={(values: any) => onSubmit(values)}
          enableReinitialize={true}
          render={({ values, setFieldValue }) => (
            <Form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate id="kt_login_signup_form">
              <div className="card-body border-top p-9">
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6 required">Name</label>
                  <div className="col-lg-8">
                    <Field placeholder={`Name`} type="text" name={"name"} autoComplete="off" className={clsx("form-control bg-transparent")} />
                  </div>
                </div>
                {params.masters === "taluka" && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required">District</label>
                    <div className="col-lg-8">
                      <Field
                        placeholder={`District`}
                        type="text"
                        as="select"
                        name={"district"}
                        autoComplete="off"
                        className={clsx("form-control bg-transparent form-select")}
                      >
                        {/* <option>{values.district}</option> */}
                        {districtList?.data?.map((list: any, i: any) => {
                          return (
                            <option key={i} value={list.name}>
                              {list.name}
                            </option>
                          );
                        })}
                      </Field>
                    </div>
                  </div>
                )}
                {params.masters === "bank-branch" && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank</label>
                    <div className="col-lg-8">
                      <Field
                        placeholder={`Bank`}
                        type="text"
                        as="select"
                        name={"bank"}
                        autoComplete="off"
                        className={clsx("form-control bg-transparent form-select")}
                      >
                        <option>{values.bank}</option>
                        {bankList?.data?.map((list: any, i: any) => {
                          return (
                            <option key={i} value={list.id}>
                              {list.name}
                            </option>
                          );
                        })}
                      </Field>
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
                          name={"moblie"}
                          autoComplete="off"
                          className={clsx("form-control bg-transparent")}
                        />
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Email</label>
                      <div className="col-lg-8">
                        <Field placeholder={`Email`} type="text" name={"email"} autoComplete="off" className={clsx("form-control bg-transparent")} />
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank</label>

                      <div className="col-lg-8">
                        <Field
                          placeholder={`Bank`}
                          type="text"
                          as="select"
                          // name={"bankId"}
                          autoComplete="off"
                          className={clsx("form-control bg-transparent form-select")}
                          onChange={(e: any) => {
                            getBranchList(e.target.value);
                          }}
                        >
                          {bankList?.data?.map((list: any, i: any) => {
                            return (
                              <option key={i} value={list.id}>
                                {list.name}
                              </option>
                            );
                          })}
                        </Field>
                      </div>
                    </div>
                    {branchList?.data?.length > 0 && (
                      <div className="row mb-6">
                        <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank Branch</label>
                        <div className="col-lg-8">
                          <Field
                            placeholder={`Bank Branch`}
                            type="text"
                            as="select"
                            name={"bankBranch"}
                            autoComplete="off"
                            className={clsx("form-control bg-transparent form-select")}
                          >
                            {branchList?.data?.map((list: any, i: any) => {
                              return (
                                <option key={i} value={list.id}>
                                  {list.name}
                                </option>
                              );
                            })}
                          </Field>
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
                          className={clsx("form-control bg-transparent")}
                        />
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Email</label>
                      <div className="col-lg-8">
                        <Field placeholder={`Email`} type="text" name={"email"} autoComplete="off" className={clsx("form-control bg-transparent")} />
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
                          className={clsx("form-control bg-transparent")}
                        />
                      </div>
                    </div>
                    <div className="row mb-6">
                      <label className="col-lg-4 col-form-label fw-bold fs-6 required">Email</label>
                      <div className="col-lg-8">
                        <Field placeholder={`Email`} type="text" name={"email"} autoComplete="off" className={clsx("form-control bg-transparent")} />
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
                          className={clsx("form-control bg-transparent")}
                        />
                      </div>
                    </div>
                  </>
                )}
                {params.masters === "executer" && (
                  <div className="row mb-6">
                    <label className="col-lg-4 col-form-label fw-bold fs-6 required">Mobile</label>
                    <div className="col-lg-8">
                      <Field placeholder={`Mobile`} type="text" name={"mobile"} autoComplete="off" className={clsx("form-control bg-transparent")} />
                    </div>
                  </div>
                )}
              </div>

              <div className="card-footer d-flex justify-content-end py-6 px-9 ">
                <button
                  type="button"
                  id="kt_login_password_reset_form_cancel_button"
                  className="btn btn-light me-4"
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
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.getByIdReducer.loading,
    error: state.getByIdReducer.error,
    details: state.getByIdReducer.details,

    bankList: state.getBankForDropdownReducer.bankList,
    districtList: state.getDistrictForDropdownReducer.districtList,
    branchList: state.getBankBranchByBankIdReducer.branchList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getByIdFields: (url: any, id: any) => dispatch(getById(url, id)),

    getBranchList: (id: any) => dispatch(fetchBankBranchByBankId(id)),
    getDistrictList: () => dispatch(fetchDistrictForDropdown()),
    getBankList: () => dispatch(fetchBankForDropdown()),

    updateMastersField: (url: any, values: any, callback: Function) => dispatch(updateMasters(url, values, callback)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(EditDetails);
export default connectComponent;
