import { useFormik } from "formik";
import { fetchUserDetails, postUserDetails } from "../../../reducers/userReducers/userAction";
import { connect } from "react-redux";
import { PLEASE_WAIT, REQUIRED } from "../../../helpers/globalConstant";
import { Link, useNavigate } from "react-router-dom";
import { PROFILE } from "../../../helpers/routesConstant";
import { useEffect } from "react";
import * as Yup from "yup";
import Loader from "../../common/loader/Loader";

export interface Props {
  posting: boolean;
  postRes: any;
  // error: string;
  postUserDetails: Function;
  userDetails: any;
  getUserDetailError: any;
  loading: boolean;
  getUserDetails: Function;
}

const EditProfile: React.FC<Props> = ({ postUserDetails, posting, postRes, getUserDetails, userDetails, loading }) => {
  const initialValues = {
    firstName: userDetails?.data?.firstName || "",
    lastName: userDetails?.data?.lastName || "",
    phoneNumber: userDetails?.data?.phoneNumber || "",
    middleName: userDetails?.data?.middleName || "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required(REQUIRED).min(3, "Minimum 3 characters"),
    lastName: Yup.string().required(REQUIRED).min(3, "Minimum 3 characters"),
    // middleName: Yup.string().required(REQUIRED).min(3, "Minimum 3 characters"),
    phoneNumber: Yup.string()
      .nullable()
      .required(REQUIRED)
      .matches(/^[0-9]{10}$/, "Wrong contact format"),
  });
  const navigate = useNavigate();
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      postUserDetails(values, () => navigate(PROFILE));
    },
  });

  return (
    <div className="card mb-5 mb-xl-10">
      <div className="card-header border-0 align-items-center">
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Profile Details</h3>
        </div>
      </div>
      {loading && <Loader />}
      {userDetails.data && (
        <form className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework" noValidate id="kt_login_signup_form" onSubmit={formik.handleSubmit}>
          <div className="card-body border-top p-9">
            <>
              <div className="row mb-6">
                <label className="col-lg-4 col-form-label required fw-bold fs-6">Full Name</label>
                <div className="col-lg-8">
                  <div className="row">
                    <div className="col-lg-6 fv-row">
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                        placeholder="First name"
                        {...formik.getFieldProps("firstName")}
                      />
                      {formik.touched.firstName && formik.errors.firstName && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{`${formik.errors.firstName}`}</div>
                        </div>
                      )}
                    </div>

                    <div className="col-lg-6 fv-row">
                      <input
                        type="text"
                        className="form-control form-control-lg form-control-solid"
                        placeholder="Last name"
                        {...formik.getFieldProps("lastName")}
                      />
                      {formik.touched.lastName && formik.errors.lastName && (
                        <div className="fv-plugins-message-container">
                          <div className="fv-help-block">{`${formik.errors.lastName}`}</div>
                        </div>
                      )}
                    </div>

                    {/* <div className="col-lg-4 fv-row">
                        <input
                          type="text"
                          className="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                          placeholder="Middle name"
                          {...formik.getFieldProps("middleName")}
                        />
                        {formik.touched.middleName && formik.errors.middleName && (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">{formik.errors.middleName}</div>
                          </div>
                        )}
                      </div> */}
                  </div>
                </div>
              </div>

              <div className="row mb-6">
                <label className="col-lg-4 col-form-label fw-bold fs-6">
                  <span className="required">Mobile</span>
                </label>
                <div className="col-lg-8 fv-row">
                  <input
                    type="tel"
                    className="form-control form-control-lg form-control-solid"
                    placeholder="Mobile"
                    {...formik.getFieldProps("phoneNumber")}
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div className="fv-plugins-message-container">
                      <div className="fv-help-block">{`${formik.errors.phoneNumber}`}</div>
                    </div>
                  )}
                </div>
              </div>
            </>
          </div>

          <div className="card-footer d-flex justify-content-end py-6 px-9">
            <Link to={PROFILE}>
              <button type="reset" className="btn btn-light btn-active-light-primary me-2">
                Discard
              </button>
            </Link>
            <button type="submit" className="btn btn-primary" disabled={posting}>
              {!posting && " Save Changes "}
              {posting && (
                <span className="indicator-progress" style={{ display: "block" }}>
                  {PLEASE_WAIT}
                </span>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    posting: state.postUserDetailReducer.loading,
    error: state.postUserDetailReducer.error,
    postRes: state.postUserDetailReducer.res,

    loading: state.userDetailsReducer.loading,
    getUserDetailError: state.userDetailsReducer.error,
    userDetails: state.userDetailsReducer.userDetails,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    postUserDetails: (details: any, callback: Function) => dispatch(postUserDetails(details, callback)),
    getUserDetails: () => dispatch(fetchUserDetails()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(EditProfile);
export default connectComponent;
