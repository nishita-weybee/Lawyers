import { useFormik } from "formik";
import { useState } from "react";
import { useAuth } from "./auth";
import * as Yup from "yup";
import { register } from "./auth/core/_requests";
import clsx from "clsx";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const registrationSchema = Yup.object().shape({
  firstname: Yup.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("First name is required"),
  email: Yup.string().email("Wrong email format").min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Email is required"),
  lastname: Yup.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Last name is required"),
  password: Yup.string().min(3, "Minimum 3 symbols").max(50, "Maximum 50 symbols").required("Password is required"),
});

const AddEmployee = () => {
  const [loading, setLoading] = useState(false);

  const { saveAuth, setCurrentUser } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, { setStatus, setSubmitting, resetForm }) => {
      setLoading(true);
      try {
        const data = await register(values.email, values.firstname, values.lastname, values.password);
        setLoading(false);
        resetForm();

        // saveAuth(auth);
        // const { data: user } = await getUserByToken(auth.api_token);
        // setCurrentUser(user);
      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus("The registration details is incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });
  return (
    <div className="app-container container-xxl">
      <div className="card mb-5 mb-xl-10">
        <div className="card-header border-0">
          <div className="card-title m-0">
            <h3 className="fw-bolder m-0">Add Employee</h3>
          </div>
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
              <label className="col-lg-4 col-form-label fw-bold fs-6">First name</label>
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
              <label className="col-lg-4 col-form-label fw-bold fs-6">Last name</label>
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
              <label className="col-lg-4 col-form-label fw-bold fs-6">Email</label>
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
              <label className="col-lg-4 col-form-label fw-bold fs-6">Password</label>
              <div className="col-lg-8">
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="off"
                  {...formik.getFieldProps("password")}
                  className={clsx(
                    "form-control bg-transparent",
                    {
                      "is-invalid": formik.touched.password && formik.errors.password,
                    },
                    {
                      "is-valid": formik.touched.password && !formik.errors.password,
                    }
                  )}
                />
                {formik.touched.password && formik.errors.password && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik.errors.password}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <button type="submit" id="kt_sign_up_submit" className="btn btn-primary" disabled={formik.isSubmitting || !formik.isValid}>
              {!loading && <span className="indicator-label">Submit</span>}
              {loading && (
                <span className="indicator-progress" style={{ display: "block" }}>
                  Please wait... <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
