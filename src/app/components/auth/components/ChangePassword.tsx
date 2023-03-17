import { useState } from "react";
import * as Yup from "yup";
import clsx from "clsx";
import { useFormik } from "formik";
import { resetPassword } from "../core/_requests";
import { Link } from "react-router-dom";
import { PLEASE_WAIT, REQUIRED, SUBMIT } from "../../../helpers/globalConstant";

const initialValues = {
  password: "",
  changepassword: "",
};

const ChangePasswordSchema = Yup.object().shape({
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/, "Wrong password format")
    .required(REQUIRED),
  changepassword: Yup.string()
    .required(REQUIRED)
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "Password and Confirm Password didn't match"),
    }),
});

export function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [passLabel, setPassLabel] = useState();

  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined);
  const [passwordType, setPasswordType] = useState("password");

  let params = new URL(`${document.location}`).searchParams;
  let token = params.get("token");
  let id = params.get("Id");

  const togglePassword = (name: any) => {
    setPassLabel(name);

    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ChangePasswordSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setHasErrors(undefined);
      setSubmitting(true);

      resetPassword({
        userId: id,
        password: values.password,
        Token: token?.replace(/ /g, "+"),
      })
        .then(({ data: { result } }) => {
          setHasErrors(false);
          setLoading(false);
          setSubmitting(false);
        })
        .catch((err: any) => {
          setHasErrors(true);
          setLoading(false);
          setSubmitting(false);
          setStatus(err.response.data.error.errorMessage);
        });
    },
  });

  return (
    <form
      className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      noValidate
      id="kt_login_password_reset_form"
      onSubmit={formik.handleSubmit}
    >
      <div className="text-center mb-10">
        <h1 className="text-dark fw-bolder mb-3">Reset Password</h1>
      </div>

      {hasErrors === true && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      )}

      {hasErrors === false && (
        <div className="mb-10 bg-light-info p-8 rounded">
          <div className="text-info">
            Password reset successfully, Please <Link to="/auth/login">login</Link>
          </div>
        </div>
      )}

      {/* <div className='fv-row mb-8'>
        <label className='form-label fw-bolder text-gray-900 fs-6'>Email</label>
        <input
          type='email'
          placeholder=''
          autoComplete='off'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control bg-transparent',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div> */}

      <div className="fv-row mb-8" data-kt-password-meter="true">
        <div className="mb-1">
          <label className="form-label fw-bolder text-dark fs-6">Password</label>
          <div className="position-relative mb-3">
            <input
              type={passLabel === "p" ? passwordType : "password"}
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
            <span className="position-absolute" style={{ right: "10px", top: "13px" }} onClick={() => togglePassword("p")}>
              {passLabel === "p" && passwordType === "password" ? <i className="fas fa-eye-slash" id="pass" /> : <i className="fas fa-eye" />}
            </span>
            {formik.touched.password && formik.errors.password && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik.errors.password}</span>
                </div>
              </div>
            )}
          </div>

          {/* <div className="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
            <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
          </div> */}
        </div>
        <div className="text-muted">Use 6 or more characters with a mix of letters, numbers & symbols.</div>
      </div>

      <div className="fv-row mb-5">
        <label className="form-label fw-bolder text-dark fs-6">Confirm Password</label>
        <div className="position-relative">
          <input
            type={passLabel === "pc" ? passwordType : "password"}
            placeholder="Password confirmation"
            autoComplete="off"
            {...formik.getFieldProps("changepassword")}
            className={clsx(
              "form-control bg-transparent",
              {
                "is-invalid password-icon": formik.touched.changepassword && formik.errors.changepassword,
              },
              {
                "is-valid password-icon": formik.touched.changepassword && !formik.errors.changepassword,
              }
            )}
          />
          <span className="position-absolute" style={{ right: "10px", top: "13px" }} onClick={() => togglePassword("pc")}>
            {passLabel === "pc" && passwordType === "password" ? <i className="fas fa-eye-slash" /> : <i className="fas fa-eye" />}
          </span>
        </div>
        {formik.touched.changepassword && formik.errors.changepassword && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">
              <span role="alert">{formik.errors.changepassword}</span>
            </div>
          </div>
        )}
      </div>

      <div className="d-flex flex-wrap justify-content-center pb-lg-0">
        <button type="submit" id="kt_password_reset_submit" className="btn btn-primary me-4">
          {!formik.isSubmitting && <span className="indicator-label">{SUBMIT}</span>}
          {formik.isSubmitting && PLEASE_WAIT}
        </button>
        <Link to="/auth/login">
          <button type="button" id="kt_login_password_reset_form_cancel_button" className="btn btn-light" disabled={formik.isSubmitting}>
            Cancel
          </button>
        </Link>
      </div>
    </form>
  );
}
