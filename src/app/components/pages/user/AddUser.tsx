import { useFormik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { DISCARD, PLEASE_WAIT, REQUIRED, SUBMIT } from "../../../helpers/globalConstant";
import { fetchUserRoles } from "../../../reducers/userReducers/userAction";
import { connect } from "react-redux";
import InputPass from "../../common/inputPass/inputPass";
import { registerUser } from "../../../reducers/authReducers/authAction";
import { useNavigate } from "react-router-dom";
import { VIEW_USER } from "../../../helpers/routesConstant";

export interface Props {
  loadingRoles: boolean;
  loading: boolean;
  userRoles: any;
  error: string;
  getUserRoles: any;
  postRegisterUser: Function;
}

const AddUser: React.FC<Props> = ({ getUserRoles, loadingRoles, userRoles, error, postRegisterUser, loading }) => {
  const navigate = useNavigate();

  useEffect(() => {
    getUserRoles();
  }, [getUserRoles]);

  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    role: "Admin",
  };

  const validationSchema = Yup.object().shape({
    firstname: Yup.string().min(3, "Minimum 3 characters").max(50, "Maximum 50 symbols").required(REQUIRED),
    email: Yup.string().email("Wrong email format").required(REQUIRED),
    lastname: Yup.string().min(3, "Minimum 3 characters").max(50, "Maximum 50 symbols").required(REQUIRED),
    password: Yup.string()
      .required(REQUIRED)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/, "Wrong password format"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      postRegisterUser(values, () => {
        resetForm();
      });
    },
  });

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 align-items-center">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Add User</h3>
        </div>
      </div>

      <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate id="kt_login_signup_form" onSubmit={formik.handleSubmit}>
        <div className="card-body border-top p-9">
          {error && (
            <div className="row mb-6">
              <div className="mb-lg-15 alert alert-danger">
                <div className="alert-text font-weight-bold">{error}</div>
              </div>
            </div>
          )}

          <div className="row mb-6">
            <label className="col-lg-4 col-form-label fw-bold fs-6 required">First name</label>
            <div className="col-lg-8">
              <input
                placeholder="First Name"
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
                placeholder="Last Name"
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
            <div className="col-lg-8">
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
                {...formik.getFieldProps("role")}
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
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loadingRoles: state.userRoleReducer.loading,
    errorRoles: state.userRoleReducer.error,
    userRoles: state.userRoleReducer.userRoles.data,

    loading: state.registerUserReducer.loading,
    error: state.registerUserReducer.error,
    res: state.registerUserReducer.res,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserRoles: () => dispatch(fetchUserRoles()),
    postRegisterUser: (registerUserDetails: any, callbackSuccess: Function) => dispatch(registerUser(registerUserDetails, callbackSuccess)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(AddUser);
export default connectComponent;
