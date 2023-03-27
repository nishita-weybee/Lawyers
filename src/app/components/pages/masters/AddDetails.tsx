import clsx from "clsx";
import { useFormik } from "formik";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { DISCARD, PLEASE_WAIT, SUBMIT } from "../../../helpers/globalConstant";
import {
  fetchAllBank,
  fetchAllBankBranch,
  fetchAllDistrict,
  fetchBankBranchByBankId,
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
  list: any;
  getAllBank: Function;
  getAllDistrict: Function;
  getAllBankBranch: Function;
  getBankBranchByBankId: Function;
  bankBranchByBankId: any;
}

const AddDetails: React.FC<props> = ({ postDetails, loading, list, getAllBank, getAllDistrict, bankBranchByBankId, getBankBranchByBankId }) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  let initialValues = {};
  let inputFields;

  const formFields = [
    [{ name: "name", label: "Name", placeholder: "Name" }],
    [
      { name: "name", label: "Name", placeholder: "Name" },
      { name: "mobile", label: "Mobile", placeholder: "Mobile" },
      { name: "email", label: "Email", placeholder: "Email" },
      { name: "postalAddress", label: "Address", placeholder: "Address" },
    ],
    [
      { name: "name", label: "Name", placeholder: "Name" },
      { name: "bankId", label: "Bank", placeholder: "Bank", type: "select" },
    ],
    [
      { name: "name", label: "Name", placeholder: "Name" },
      { name: "mobile", label: "Mobile", placeholder: "Mobile" },
      { name: "email", label: "Email", placeholder: "Email" },
      { name: "bankId", label: "Bank", placeholder: "Bank", type: "select" },
      { name: "bankBranchId", label: "Bank Branch", placeholder: "Bank Branch", type: "select2" },
    ],
    [
      { name: "name", label: "Name", placeholder: "Name" },
      { name: "mobile", label: "Mobile", placeholder: "Mobile" },
    ],
    [
      { name: "name", label: "Name", placeholder: "Name" },
      { name: "mobile", label: "Mobile", placeholder: "Mobile" },
      { name: "email", label: "Email", placeholder: "Email" },
    ],
    [
      { name: "name", label: "Name", placeholder: "Name" },
      { name: "districtId", label: "District", placeholder: "District", type: "select" },
    ],
  ];
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
    params.masters === "bank-branch" && getAllBank("bank-details", "");
    params.masters === "taluka" && getAllDistrict("district", "");
    params.masters === "bank-officer" && getAllBank("bank-details", "");
  }, [params.masters, getAllBank, getAllDistrict]);

  switch (params.masters) {
    case "district":
      initialValues = initialValuesArr[0];
      inputFields = formFields[0];
      break;
    case "taluka":
      initialValues = initialValuesArr[6];
      inputFields = formFields[6];
      break;
    case "forum":
      initialValues = initialValuesArr[0];
      inputFields = formFields[0];
      break;
    case "judge":
      initialValues = initialValuesArr[0];
      inputFields = formFields[0];
      break;
    case "bank-details":
      initialValues = initialValuesArr[0];
      inputFields = formFields[0];
      break;
    case "department":
      initialValues = initialValuesArr[0];
      inputFields = formFields[0];
      break;
    case "bank-branch":
      initialValues = initialValuesArr[2];
      inputFields = formFields[2];
      break;
    case "bank-officer":
      initialValues = initialValuesArr[3];
      inputFields = formFields[3];
      break;
    case "advocate":
      initialValues = initialValuesArr[5];
      inputFields = formFields[5];
      break;
    case "associate-advocate":
      initialValues = initialValuesArr[1];
      inputFields = formFields[1];
      break;
    case "executer":
      initialValues = initialValuesArr[4];
      inputFields = formFields[4];
      break;
    case "executive-officer-designation":
      initialValues = initialValuesArr[0];
      inputFields = formFields[0];
      break;
    default:
      break;
  }

  const formik = useFormik({
    initialValues,
    onSubmit: async (values, { resetForm }) => {
      resetForm();
      navigate(`/masters/${params.masters}`);
      postDetails(params?.masters, values);
    },
  });

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

      <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate id="kt_login_signup_form" onSubmit={formik.handleSubmit}>
        <div className="card-body border-top p-9">
          {inputFields?.map((field: any, i: any) => {
            return (
              <div className="row mb-6" key={i}>
                <label className="col-lg-4 col-form-label fw-bold fs-6 required">{field.label}</label>
                <div className="col-lg-8">
                  {!field.type && (
                    <input
                      placeholder={field.placeholder}
                      type="text"
                      autoComplete="off"
                      {...formik.getFieldProps(field.name)}
                      className={clsx("form-control bg-transparent")}
                    />
                  )}

                  {field.type === "select" && (
                    <>
                      <select
                        className="form-select form-select-solid"
                        data-kt-select2="true"
                        {...formik.getFieldProps(field.name)}
                        data-placeholder="Select option"
                        data-allow-clear="true"
                        // onChange={(e) => {
                        //   getBankBranchByBankId(e.target.value);
                        // }}
                      >
                        {list?.data?.records?.map((list: any, i: any) => {
                          return (
                            <option key={i} value={list.id}>
                              {list.name}
                            </option>
                          );
                        })}
                      </select>
                    </>
                  )}

                  {/* {field.type === "select2" && bankBranchByBankId?.data?.length && (
                    <select
                      className="form-select form-select-solid"
                      data-kt-select2="true"
                      {...formik.getFieldProps(field.name)}
                      data-placeholder="Select option"
                      data-allow-clear="true"
                    >
                      <option value={"Select"}>Select</option>
                      {bankBranchByBankId?.data.map((list: any, i: any) => {
                        return (
                          <option key={i} value={list.id}>
                            {list.name}
                          </option>
                        );
                      })}
                    </select>
                  )} */}
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-footer d-flex justify-content-end py-6 px-9 ">
          <button
            type="button"
            id="kt_login_password_reset_form_cancel_button"
            className="btn btn-light me-4"
            disabled={loading}
            onClick={() => navigate(`/masters/${params.masters}`)}
          >
            {DISCARD}
          </button>
          <button type="submit" className="btn btn-primary">
            {!loading && <span className="indicator-label">{SUBMIT}</span>}
            {loading && PLEASE_WAIT}
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.postMasterDataReducer.loading,
    error: state.postMasterDataReducer.error,
    details: state.postMasterDataReducer.districtList,

    // loading: state.getAllMastersDataReducer.loading,
    // error: state.getAllMastersDataReducer.error,
    list: state.getAllMastersDataReducer.getAllDetails,
    bankBranchByBankId: state.getBankBranchByBankIdReducer.bankList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    postDetails: (masters: string, detail: any) => {
      switch (masters) {
        case "district":
          dispatch(postDistrict(detail));
          break;
        case "taluka":
          dispatch(postTaluka(detail));
          break;
        case "forum":
          dispatch(postForum(detail));
          break;
        case "judge":
          dispatch(postJudgeName(detail));
          break;
        case "bank-details":
          dispatch(postBank(detail));
          break;
        case "department":
          dispatch(postDepartment(detail));
          break;
        case "bank-branch":
          dispatch(postBankBranch(detail));
          break;
        case "bank-officer":
          dispatch(postBankOfficer(detail));
          break;
        case "advocate":
          dispatch(postOurAdvocate(detail));
          break;
        case "associate-advocate":
          dispatch(postAssociateAdvocate(detail));
          break;
        case "executer":
          dispatch(postExecuterName(detail));
          break;
        case "executive-officer-designation":
          dispatch(postExecutingOfficerDesignation(detail));
          break;
        default:
          break;
      }
    },
    getAllDistrict: (master: any, location: any) => dispatch(fetchAllDistrict(master, location)),
    getAllBank: (master: any, location: any) => dispatch(fetchAllBank(master, location)),
    getAllBankBranch: (master: any, location: any) => dispatch(fetchAllBankBranch(master, location)),
    getBankBranchByBankId: (id: any) => dispatch(fetchBankBranchByBankId(id)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(AddDetails);
export default connectComponent;
