import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import { requestPassword } from "../core/_requests";
import { useNavigate } from "react-router-dom";

const initialValues = {
  email: "",
};

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Wrong email format").min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Email is required"),
});

export function ForgotPassword() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setSubmitting(true);
      setLoading(true);
      setHasErrors(undefined);
      setTimeout(() => {
        requestPassword(values.email)
          .then(({ data: { result } }) => {
            setHasErrors(false);
            setLoading(false);
            setSubmitting(false);
          })
          .catch((err) => {
            setHasErrors(true);
            setLoading(false);
            setSubmitting(false);
            setStatus(err.response?.data?.error?.errorMessage);
            console.log(err.response?.data?.error?.errorMessage);
          });
      }, 1000);
    },
  });

  return (
    console.log(formik.isSubmitting),
    (
      <form
        className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
        noValidate
        id="kt_login_password_reset_form"
        onSubmit={formik.handleSubmit}
      >
        <div className="text-center mb-10">
          <h1 className="text-dark fw-bolder mb-3">Forgot Password ?</h1>

          <div className="text-gray-500 fw-semibold fs-6">Enter your email to reset your password.</div>
        </div>

        {hasErrors === true && (
          <div className="mb-lg-15 alert alert-danger">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}

        {hasErrors === false && (
          <div className="mb-10 bg-light-info p-8 rounded">
            <div className="text-info">Sent reset password link. Please check your email</div>
          </div>
        )}

        <div className="fv-row mb-8">
          <label className="form-label fw-bolder text-gray-900 fs-6">Email</label>
          <input
            type="email"
            placeholder="Email"
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

        <div className="d-flex flex-wrap justify-content-center pb-lg-0">
          <button type="submit" id="kt_password_reset_submit" className="btn btn-primary me-4">
            {!formik.isSubmitting && <span className="indicator-label">Submit</span>}
            {formik.isSubmitting && (
              <span className="indicator-progress d-block">
                Please wait...
                <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            )}
          </button>
          {/* <Link to="/auth/login"> */}
          <button
            type="button"
            id="kt_login_password_reset_form_cancel_button"
            className="btn btn-light"
            disabled={formik.isSubmitting || !formik.isValid}
            onClick={() => navigate("/auth/login")}
          >
            Cancel
          </button>
          {/* </Link> */}
        </div>
      </form>
    )
  );
}
