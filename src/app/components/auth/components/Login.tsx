import { connect } from "react-redux";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAuth } from "../core/Auth";
import { login } from "../../../reducers/authReducers/authAction";
import { DASHBOARD } from "../../../helpers/routesConstant";
import InputPass from "../../common/inputPass/inputPass";
import { CONTINUE, PLEASE_WAIT, REQUIRED } from "../../../helpers/globalConstant";

export interface props {
  postLoginDetails: Function;
  res: any;
  error: any;
  loading: boolean;
}

export const Login: React.FC<props> = ({ postLoginDetails, res, error, loading }) => {
  const { saveAuth, setCurrentUser } = useAuth();
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Wrong email format").required(REQUIRED),
    password: Yup.string()
      .required(REQUIRED)
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,})/, "Wrong password format"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      postLoginDetails(
        values,
        (data: any) => {
          setCurrentUser(data);
          saveAuth(data.data);
          navigate(`${DASHBOARD}`);
        },
        () => {
          saveAuth(undefined);
        }
      );
    },
  });

  return (
    <form className="form w-100" onSubmit={formik.handleSubmit} noValidate id="kt_login_signin_form">
      <div className="text-center mb-11">
        <h1 className="text-dark fw-bolder mb-3">Login</h1>
      </div>

      {error && (
        <div className="mb-lg-8 alert alert-danger">
          <div className="alert-text font-weight-bold">{error}</div>
        </div>
      )}

      <div className="fv-row mb-8">
        <label className="form-label fs-6 fw-bolder text-dark">Email</label>
        <input
          placeholder="Email"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control bg-transparent",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
          type="email"
          name="email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>

      <div className="fv-row mb-3 ">
        <label className="form-label fw-bolder text-dark fs-6 mb-0">Password</label>
        <InputPass formik={formik} fieldProp="password" placeholder="Password" touched={formik.touched.password} errors={formik.errors.password} />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <Link to="/auth/forgot-password" className="link-primary">
          Forgot Password ?
        </Link>
      </div>

      <div className="d-grid mb-10">
        <button type="submit" id="kt_sign_in_submit" className="btn btn-primary" disabled={formik.isSubmitting || !formik.isValid}>
          {!loading && <span className="indicator-label">{CONTINUE}</span>}
          {loading && PLEASE_WAIT}
        </button>
      </div>
    </form>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.loginReducer.loading,
    error: state.loginReducer.error,
    res: state.loginReducer.res,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    postLoginDetails: (values: any, callBackSuccess: Function, callBackFailure: Function) =>
      dispatch(login(values, callBackSuccess, callBackFailure)),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Login);
export default connectComponent;
