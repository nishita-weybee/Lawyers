import * as Yup from "yup";
import clsx from "clsx";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { login } from "../core/_requests";
import { useAuth } from "../core/Auth";
import { CONTINUE, PLEASE_WAIT, REQUIRED } from "../../../helpers/globalConstant";
import { DASHBOARD } from "../../../helpers/routesConstant";
import { useState } from "react";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Wrong email format").required(REQUIRED),
  password: Yup.string()
    .required(REQUIRED)
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/, "Wrong password format"),
});

const initialValues = {
  email: "",
  password: "",
};

export function Login() {
  const { saveAuth, setCurrentUser } = useAuth();
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      try {
        const tokenInfo = await login(values.email, values.password);
        saveAuth(tokenInfo.data.data);
        setCurrentUser(tokenInfo.data);
        navigate(`${DASHBOARD}`);
        setSubmitting(false);
      } catch (err: any) {
        console.log(err.response);
        saveAuth(undefined);
        setStatus(err?.response?.data?.error?.errorMessage);
        setSubmitting(false);
      }
    },
  });

  return (
    <form className="form w-100" onSubmit={formik.handleSubmit} noValidate id="kt_login_signin_form">
      <div className="text-center mb-11">
        <h1 className="text-dark fw-bolder mb-3">Login</h1>
      </div>

      {formik.status && (
        <div className="mb-lg-8 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
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
        <div className="position-relative">
          <input
            type={passwordType}
            placeholder="Password"
            autoComplete="off"
            {...formik.getFieldProps("password")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid password-icon": formik.touched.password && formik.errors.password,
              },
              {
                "is-valid password-icon": formik.touched.password && !formik.errors.password,
              }
            )}
          />
          <span className="position-absolute " style={{ right: "10px", top: "13px" }} onClick={togglePassword}>
            {passwordType === "password" ? <i className="fas fa-eye-slash" id="hide_eye" /> : <i className="fas fa-eye" id="show_eye" />}
          </span>
        </div>

        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
        <div />

        <Link to="/auth/forgot-password" className="link-primary">
          Forgot Password ?
        </Link>
      </div>

      <div className="d-grid mb-10">
        <button type="submit" id="kt_sign_in_submit" className="btn btn-primary" disabled={formik.isSubmitting || !formik.isValid}>
          {!formik.isSubmitting && <span className="indicator-label">{CONTINUE}</span>}
          {formik.isSubmitting && PLEASE_WAIT}
        </button>
      </div>
    </form>
  );
}
