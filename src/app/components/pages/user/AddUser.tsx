import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useAuth } from "../../auth";
import * as Yup from "yup";
import { register } from "../../auth/core/_requests";
import clsx from "clsx";
import { PLEASE_WAIT, REQUIRED, SUBMIT } from "../../../helpers/globalConstant";
import { fetchUserRoles } from "../../../reducers/userReducer/addUser/addUserAction";
import { connect } from "react-redux";
import { showToastMessageFailure, showToastMessageSuccess } from "../../../helpers/helperFunction";

export interface Props {
  loadingRoles: boolean;
  userRoles: any;
  error: string;
  getUserRoles: any;
}

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const registrationSchema = Yup.object().shape({
  firstname: Yup.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required(REQUIRED),
  email: Yup.string().email("Wrong email format").required(REQUIRED),
  lastname: Yup.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required(REQUIRED),
  password: Yup.string()
    .required(REQUIRED)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/, "Wrong password format"),
});

const AddUser: React.FC<Props> = ({ getUserRoles, loadingRoles, userRoles, error }) => {
  const [passwordType, setPasswordType] = useState("password");
  const [role, setRole] = useState("Admin");

  useEffect(() => {
    getUserRoles();
  }, []);

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const { saveAuth } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
      setSubmitting(true);
      try {
        register(values.email, values.firstname, values.lastname, values.password, role);
        showToastMessageSuccess();
        setSubmitting(false);
        resetForm();
      } catch (err: any) {
        console.error(err);
        showToastMessageFailure();
        saveAuth(undefined);
        setStatus(err.response.data.error.errorMessage);
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 align-items-center">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Add User</h3>
        </div>
        {/* <div>
          <select
            className="form-select form-select-solid"
            data-kt-select2="true"
            onChange={(e: any) => {
              return setRole(e.target.value);
            }}
            data-placeholder="Select option"
            data-allow-clear="true"
          >
            {userRoles?.map((role: string, i: any) => {
              return (
                <option key={i} value={role}>
                  {role}
                </option>
              );
            })}
          </select>
        </div> */}
      </div>

      <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate id="kt_login_signup_form" onSubmit={formik.handleSubmit}>
        <div className="card-body border-top p-9">
          {formik.status && (
            <div className="row mb-6">
              <div className="mb-lg-15 alert alert-danger">
                <div className="alert-text font-weight-bold">{formik.status}</div>
              </div>
            </div>
          )}

          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-bold fs-6 required">First name</label>
            <div className="col-lg-8">
              <input
                placeholder="First name"
                type="text"
                autoComplete="off"
                {...formik.getFieldProps("firstname")}
                className={clsx(
                  "form-control bg-transparent",
                  {
                    "is-invalid": formik.touched.firstname && formik.errors.firstname,
                  },
                  {
                    "is-valid": formik.touched.firstname && !formik.errors.firstname,
                  }
                )}
              />
              {formik.touched.firstname && formik.errors.firstname && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.firstname}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-bold fs-6 required">Last name</label>
            <div className="col-lg-8">
              <input
                placeholder="Last name"
                type="text"
                autoComplete="off"
                {...formik.getFieldProps("lastname")}
                className={clsx(
                  "form-control bg-transparent",
                  {
                    "is-invalid": formik.touched.lastname && formik.errors.lastname,
                  },
                  {
                    "is-valid": formik.touched.lastname && !formik.errors.lastname,
                  }
                )}
              />
              {formik.touched.lastname && formik.errors.lastname && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.lastname}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-bold fs-6 required">Email</label>
            <div className="col-lg-8">
              <input
                placeholder="Email"
                type="email"
                autoComplete="off"
                {...formik.getFieldProps("email")}
                className={clsx(
                  "form-control bg-transparent",
                  { "is-invalid": formik.touched.email && formik.errors.email },
                  {
                    "is-valid": formik.touched.email && !formik.errors.email,
                  }
                )}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.email}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-bold fs-6 required">Password</label>
            <div className="col-lg-8 position-relative">
              <input
                type={passwordType}
                placeholder="Password"
                autoComplete="off"
                {...formik.getFieldProps("password")}
                className={clsx(
                  "form-control bg-transparent pass",
                  {
                    "is-invalid password-icon": formik.touched.password && formik.errors.password,
                  },
                  {
                    "is-valid password-icon": formik.touched.password && !formik.errors.password,
                  }
                )}
              />
              <span className="position-absolute " style={{ right: "19px", top: "13px" }} onClick={togglePassword}>
                {passwordType === "password" ? <i className="fas fa-eye-slash" id="hide_eye" /> : <i className="fas fa-eye" id="show_eye" />}
              </span>

              {formik.touched.password && formik.errors.password && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors.password}</span>
                  </div>
                </div>
              )}

              <div className="text-muted">Use 6 or more characters with a mix of letters, numbers & symbols.</div>
            </div>
          </div>
          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-bold fs-6 required">Role</label>
            <div className="col-lg-8">
              <select
                className="form-select form-select-solid"
                data-kt-select2="true"
                onChange={(e: any) => {
                  return setRole(e.target.value);
                }}
                data-placeholder="Select option"
                data-allow-clear="true"
              >
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
        <div className="card-footer d-flex justify-content-end py-6 px-9">
          <button type="submit" id="kt_sign_up_submit" className="btn btn-primary" disabled={formik.isSubmitting || !formik.isValid}>
            <>
              {!formik.isSubmitting && <span className="indicator-label">{SUBMIT}</span>}
              {formik.isSubmitting && PLEASE_WAIT}
            </>
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loadingRoles: state.userRoleReducer.loading,
    error: state.userRoleReducer.error,
    userRoles: state.userRoleReducer.userRoles.data,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserRoles: () => dispatch(fetchUserRoles()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(AddUser);
export default connectComponent;
