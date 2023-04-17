import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { DISCARD, PLEASE_WAIT, REQUIRED, SUBMIT } from "../../../helpers/globalConstant";
import { fetchUserDetailsById, fetchUserRoles, postUserDetails } from "../../../reducers/userReducers/userAction";
import { connect } from "react-redux";
import { registerUser } from "../../../reducers/authReducers/authAction";
import { useNavigate, useParams } from "react-router-dom";
import { VIEW_USER } from "../../../helpers/routesConstant";
import { fetchDesignationDropdown } from "../../../reducers/mastersReducers/mastersAction";
import InputPass from "../../common/inputPass/inputPass";
import { convert } from "../../../helpers/helperFunction";

export interface Props {
  loadingRoles: boolean;
  userRoles: any;
  error: string;
  getUserRoles: any;
  postRegisterUser: Function;
  getUserDetails: Function;
  details: any;
  postDetails: Function;
  posting: boolean;
  putting: boolean;
  getDesignation: Function;
  designationList: any;
}

const AddUser: React.FC<Props> = ({
  getUserRoles,
  loadingRoles,
  userRoles,
  error,
  postRegisterUser,
  putting,
  details,
  getUserDetails,
  posting,
  designationList,
  getDesignation,
  postDetails,
}) => {
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      getUserDetails(params.id);
    }
    getUserRoles();
  }, [getUserRoles, getUserDetails, params]);

  const initialValues = {
    firstName: "",
    lastName: "",
    address: null,
    city: null,
    pinCode: null,
    email: "",
    mobile: "",
    dateOfBirth: "",
    joiningDate: "",
    aadharNo: "",
    panNo: "",
    role: "",
    password: "",
    userCode: "",
    designationId: "",
  };
  const loading = params.id ? putting : posting;
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().min(3, "Minimum 3 characters").max(50, "Maximum 50 symbols").required(REQUIRED),
    email: Yup.string().email("Wrong email format").required(REQUIRED),
    lastName: Yup.string().min(3, "Minimum 3 characters").max(50, "Maximum 50 symbols").required(REQUIRED),
    password: Yup.string()
      .required(REQUIRED)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/, "Wrong password format"),
    joiningDate: Yup.date().typeError(REQUIRED).required(REQUIRED),
    role: Yup.string().required(REQUIRED),
    designationId: Yup.string().required(REQUIRED),
    userCode: Yup.string().required(REQUIRED),
    // mobile: Yup.string().matches(/^\d{10}$/, "Wrong contact format"),
    // aadharNo: Yup.string().matches(/^\d{12}$/, "Invalid Aadhar number"),
    // panNo: Yup.string().matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, "Invalid PAN number"),
  });

  const editSchema = Yup.object().shape({
    firstName: Yup.string().min(3, "Minimum 3 characters").max(50, "Maximum 50 symbols").required(REQUIRED),
    email: Yup.string().email("Wrong email format").required(REQUIRED),
    lastName: Yup.string().min(3, "Minimum 3 characters").max(50, "Maximum 50 symbols").required(REQUIRED),
    joiningDate: Yup.date().typeError(REQUIRED).required(REQUIRED),
    role: Yup.string().required(REQUIRED),
    designationId: Yup.string().required(REQUIRED),
    userCode: Yup.string().required(REQUIRED),
    // mobile: Yup.string().matches(/^\d{10}$/, "Wrong contact format"),
    // aadharNo: Yup.string().matches(/^\d{12}$/, "Invalid Aadhar number"),
    // panNo: Yup.string().matches(/^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/, "Invalid PAN number"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: params.id ? details?.details?.data : initialValues,
    validationSchema: params.id ? editSchema : validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (params.id) {
        postDetails(values, () => navigate(VIEW_USER));
      } else {
        postRegisterUser({ ...values, dateOfBirth: values.dateOfBirth === "" ? null : values.dateOfBirth }, () => {
          resetForm();
        });
      }
    },
  });

  console.log(formik.values, convert(formik?.values?.dateOfBirth));

  useEffect(() => {
    getDesignation();
  }, [getDesignation]);

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 align-items-center">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">{!params.id ? "Add User" : "Edit User"}</h3>
        </div>
      </div>

      {formik.values && (
        <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate id="kt_login_signup_form" onSubmit={formik.handleSubmit}>
          <div className="card-body border-top p-9">
            <div className="row mb-lg-6">
              <div className="col-lg-6">
                <label className="col-form-label fw-bold fs-6 required" htmlFor={"firstName"}>
                  First Name
                </label>
                <div className="">
                  <input
                    placeholder="First Name"
                    type="text"
                    autoComplete="off"
                    {...formik.getFieldProps("firstName")}
                    className={clsx(
                      "form-control bg-transparent",
                      {
                        "is-invalid": formik.touched.firstName && formik.errors.firstName,
                      },
                      {
                        "is-valid": formik.touched.firstName && !formik.errors.firstName,
                      }
                    )}
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{`${formik.errors.firstName}`}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6 required">Last Name</label>
                <div className="">
                  <input
                    placeholder="Last Name"
                    type="text"
                    autoComplete="off"
                    {...formik.getFieldProps("lastName")}
                    className={clsx(
                      "form-control bg-transparent",
                      {
                        "is-invalid": formik.touched.lastName && formik.errors.lastName,
                      },
                      {
                        "is-valid": formik.touched.lastName && !formik.errors.lastName,
                      }
                    )}
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{`${formik.errors.lastName}`}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-lg-6">
              <label className="col-form-label fw-bold fs-6 ">Address</label>
              <div className="">
                <textarea
                  placeholder="Address"
                  autoComplete="off"
                  {...formik.getFieldProps("address")}
                  className={clsx("form-control bg-transparent")}
                />
              </div>
            </div>

            <div className="row mb-lg-6">
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6 required">Email</label>
                <div className="">
                  <input
                    placeholder="Email"
                    type="email"
                    autoComplete="off"
                    {...formik.getFieldProps("email")}
                    className={clsx("form-control bg-transparent", { "is-invalid": formik.touched.email && formik.errors.email })}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6 ">Contact No</label>
                <div className="">
                  <input
                    placeholder="Contact No"
                    type="text"
                    autoComplete="off"
                    {...formik.getFieldProps("mobile")}
                    className={clsx("form-control bg-transparent")}
                  />

                  {formik.touched.mobile && formik.errors.mobile && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{`${formik.errors.mobile}`}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-lg-6">
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6" htmlFor="dateOfBirth">
                  Date Of Birth
                </label>
                <div className="">
                  <input
                    placeholder=" Date Of Birth"
                    type="date"
                    autoComplete="off"
                    // {...formik.getFieldProps("dateOfBirth")}
                    name="dateOfBirth"
                    onChange={(e: any) => formik.setFieldValue("dateOfBirth", e.target.value)}
                    value={formik.values?.dateOfBirth ? convert(formik.values?.dateOfBirth) : ""}
                    className={clsx("form-control bg-transparent")}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6 required" htmlFor="joiningDate">
                  Joining Date
                </label>
                <div className="">
                  <input
                    value={formik.values?.joiningDate ? convert(formik.values?.joiningDate) : ""}
                    placeholder="joiningDate"
                    type="date"
                    autoComplete="off"
                    name="joiningDate"
                    onChange={(e: any) => formik.setFieldValue("joiningDate", e.target.value)}
                    className={clsx(
                      "form-control bg-transparent",
                      { "is-invalid": formik.touched.joiningDate && formik.errors.joiningDate },
                      {
                        "is-valid": formik.touched.joiningDate && !formik.errors.joiningDate,
                      }
                    )}
                  />
                  {formik.touched.joiningDate && formik.errors.joiningDate && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{`${formik.errors.joiningDate}`}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-lg-6">
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6">Aadhar Number</label>
                <div className="">
                  <input
                    placeholder="Aadhar Number"
                    type="text"
                    autoComplete="off"
                    {...formik.getFieldProps("aadharNo")}
                    className={clsx("form-control bg-transparent")}
                  />

                  {formik.touched.aadharNo && formik.errors.aadharNo && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{`${formik.errors.aadharNo}`}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6">PAN Number</label>
                <div className="">
                  <input
                    placeholder="PAN Number"
                    type="text"
                    autoComplete="off"
                    {...formik.getFieldProps("panNo")}
                    className={clsx("form-control bg-transparent")}
                  />
                  {formik.touched.panNo && formik.errors.panNo && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{`${formik.errors.panNo}`}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-lg-6">
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6 required">User Code</label>
                <div className="">
                  <input
                    placeholder="User Code"
                    type="text"
                    autoComplete="off"
                    {...formik.getFieldProps("userCode")}
                    className={clsx(
                      "form-control bg-transparent",
                      { "is-invalid": formik.touched.userCode && formik.errors.userCode },
                      {
                        "is-valid": formik.touched.userCode && !formik.errors.userCode,
                      }
                    )}
                  />
                  {formik.touched.userCode && formik.errors.userCode && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{`${formik.errors.userCode}`}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6 required">Designation</label>
                <div className="">
                  <select
                    {...formik.getFieldProps("designationId")}
                    className={clsx(
                      "form-control bg-transparent",
                      { "is-invalid": formik.touched.designationId && formik.errors.designationId },
                      {
                        "is-valid": formik.touched.designationId && !formik.errors.designationId,
                      }
                    )}
                  >
                    <option>Select Designation</option>
                    {designationList?.data?.map((list: any, i: any) => (
                      <option value={list.id}>{list.name}</option>
                    ))}
                  </select>

                  {formik.touched.designationId && formik.errors.designationId && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">
                        <span role="alert">{`${formik.errors.designationId}`}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row mb-lg-6">
              {!params.id && (
                <div className="col-lg-6">
                  <label className=" col-form-label fw-bold fs-6 required">Password</label>
                  <div className="">
                    <InputPass
                      formik={formik}
                      placeholder="Password"
                      fieldProp="password"
                      touched={formik.touched.password}
                      errors={formik.errors.password}
                    />

                    {formik.touched.password && formik.errors.password && (
                      <div className="fv-plugins-message-container">
                        <div className="fv-help-block">
                          <span role="alert">{`${formik.errors.password}`}</span>
                        </div>
                      </div>
                    )}

                    <div className="text-muted">Use 6 or more characters with a mix of letters, numbers & symbols.</div>
                  </div>
                </div>
              )}
              <div className="col-lg-6">
                <label className=" col-form-label fw-bold fs-6 required">Role</label>
                <div className="">
                  <select
                    className={clsx(
                      "form-control bg-transparent  form-select-solid",
                      { "is-invalid": formik.touched.role && formik.errors.role },
                      {
                        "is-valid": formik.touched.role && !formik.errors.role,
                      }
                    )}
                    {...formik.getFieldProps("role")}
                  >
                    <option value="" disabled>
                      Select Role
                    </option>

                    {userRoles?.map((role: string, i: any) => {
                      return (
                        <option key={i} value={role}>
                          {role}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button type="button" className="btn btn-light btn-active-light-primary me-4" onClick={() => navigate(`${VIEW_USER}`)}>
              {DISCARD}
            </button>
            <button type="submit" id="kt_sign_up_submit" className="btn btn-primary" disabled={loading}>
              <>
                {!loading && <span className="indicator-label">{SUBMIT}</span>}
                {loading && PLEASE_WAIT}
              </>
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loadingRoles: state.userRoleReducer.loading,
    errorRoles: state.userRoleReducer.error,
    userRoles: state.userRoleReducer.userRoles.data,

    posting: state.registerUserReducer.loading,
    error: state.registerUserReducer.error,
    res: state.registerUserReducer.res,

    designationList: state.getDesignationForDropdownReducer.designation,

    details: state.userDetailsByIdReducer,
    putting: state.postUserDetailReducer.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserRoles: () => dispatch(fetchUserRoles()),
    getUserDetails: (id: any) => dispatch(fetchUserDetailsById(id)),
    postRegisterUser: (registerUserDetails: any, callbackSuccess: Function) => dispatch(registerUser(registerUserDetails, callbackSuccess)),
    postDetails: (details: any, callback: Function) => dispatch(postUserDetails(details, callback)),
    getDesignation: () => dispatch(fetchDesignationDropdown()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(AddUser);
export default connectComponent;
