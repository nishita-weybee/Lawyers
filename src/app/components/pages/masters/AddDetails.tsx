import clsx from "clsx";
import { Field, Form, Formik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DISCARD, PLEASE_WAIT, SUBMIT } from "../../../helpers/globalConstant";
import {
  fetchBankBranchByBankId,
  fetchBankForDropdown,
  fetchDistrictForDropdown,
  postAssociateAdvocate,
  postBank,
  postBankBranch,
  postBankOfficer,
  postDepartment,
  postDistrict,
  postExecuterName,
  postExecutingOfficerDesignation,
  postForum,
  postJudgeName,
  postOurAdvocate,
  postTaluka,
} from "../../../reducers/mastersReducers/mastersAction";

export interface props {
  postDetails: Function;
  loading: boolean;

  branchList: any;
  districtList: any;
  bankList: any;
  getBankList: Function;
  getDistrictList: Function;
  getBranchList: Function;
}

const AddDetails: React.FC<props> = ({ postDetails, loading, branchList, districtList, bankList, getBankList, getDistrictList, getBranchList }) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  let num = 0;
  switch (params.masters) {
    case "district":
      num = 0;
      break;
    case "taluka":
      num = 6;
      break;
    case "forum":
      num = 0;
      break;
    case "judge":
      num = 0;
      break;
    case "bank-details":
      num = 0;
      break;
    case "department":
      num = 0;
      break;
    case "bank-branch":
      num = 2;
      break;
    case "bank-officer":
      num = 3;
      break;
    case "advocate":
      num = 5;
      break;
    case "associate-advocate":
      num = 1;
      break;
    case "executer":
      num = 4;
      break;
    case "executive-officer-designation":
      num = 0;
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
  ];

  useEffect(() => {
    params.masters === "taluka" && getDistrictList();
    params.masters === "bank-branch" && getBankList();
    params.masters === "bank-officer" && getBankList();
  }, [params.masters, getDistrictList, getBankList]);

  // console.log(districtList, "districtList");
  // console.log(branchList, "branchList");
  // console.log(bankList, "  bankList");

  const onSubmit = async (values: any, resetForm: any) => {
    await postDetails(params?.masters, values, () => {
      navigate(`/masters/${params?.masters}`);
      resetForm();
    });
  };

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 align-items-center">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0 text-capitalize">{`${location.pathname.includes("add") ? "Add" : "Update"} ${params.masters?.replace(
            /-/,
            " "
          )}`}</h3>
        </div>
      </div>

      <Formik
        initialValues={initialValuesArr[num]}
        onSubmit={(values: any, resetForm) => onSubmit(values, resetForm)}
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
                      name={"districtId"}
                      autoComplete="off"
                      className={clsx("form-control bg-transparent form-select")}
                      onChange={(e: any) => setFieldValue("districtId", e.target.value)}
                    >
                      <option value="" selected={true} disabled>
                        Select Disrict
                      </option>
                      {districtList?.data?.map((list: any, i: any) => {
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
              {params.masters === "bank-branch" && (
                <div className="row mb-6">
                  <label className="col-lg-4 col-form-label fw-bold fs-6 required">Bank</label>
                  <div className="col-lg-8">
                    <Field
                      placeholder={`Bank`}
                      type="text"
                      as="select"
                      name={"bankId"}
                      autoComplete="off"
                      className={clsx("form-control bg-transparent form-select")}
                      onChange={(e: any) => setFieldValue("bankId", e.target.value)}
                    >
                      <option value="" selected={true} disabled>
                        Select Branch
                      </option>
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
                      <Field placeholder={`Mobile`} type="text" name={"mobile"} autoComplete="off" className={clsx("form-control bg-transparent")} />
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
                        name={"bankId"}
                        autoComplete="off"
                        className={clsx("form-control bg-transparent form-select")}
                        onChange={(e: any) => {
                          getBranchList(e.target.value);
                          // console.log(e.target.value);
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
                          name={"bankBranchId"}
                          autoComplete="off"
                          className={clsx("form-control bg-transparent form-select")}
                          onChange={(e: any) => setFieldValue("bankBranchId", e.target.value)}
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
                      <Field placeholder={`Mobile`} type="text" name={"mobile"} autoComplete="off" className={clsx("form-control bg-transparent")} />
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
                      <Field placeholder={`Mobile`} type="text" name={"mobile"} autoComplete="off" className={clsx("form-control bg-transparent")} />
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
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.postMasterDataReducer.loading,
    error: state.postMasterDataReducer.error,
    details: state.postMasterDataReducer.districtList,

    bankList: state.getBankForDropdownReducer.bankList,
    districtList: state.getDistrictForDropdownReducer.districtList,
    branchList: state.getBankBranchByBankIdReducer.branchList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
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
        default:
          break;
      }
    },
    getBranchList: (id: any) => dispatch(fetchBankBranchByBankId(id)),
    getDistrictList: () => dispatch(fetchDistrictForDropdown()),
    getBankList: () => dispatch(fetchBankForDropdown()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(AddDetails);
export default connectComponent;
