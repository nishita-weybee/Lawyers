import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { EDIT_PROFILE } from "../../../helpers/routesConstant";
import { fetchUserDetails } from "../../../reducers/userReducer/addUser/addUserAction";
export interface Props {
  loading: boolean;
  userDetails: any;
  error: string;
  getUserDetails: any;
}
const Profile: React.FC<Props> = ({ getUserDetails, loading, error, userDetails }) => {
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div>
      <div className="card mb-5 mb-xl-10" id="kt_profile_details_view">
        <div className="card-header cursor-pointer">
          <div className="card-title m-0">
            <h3 className="fw-bold m-0">Profile Details</h3>
          </div>

          <Link to={`${EDIT_PROFILE}`} className="btn btn-sm btn-primary align-self-center">
            Edit Profile
          </Link>
        </div>

        <div className="card-body p-9">
          <div className="row mb-7">
            {userDetails.data && (
              <>
                <label className="col-lg-4 fw-semibold text-muted">Full Name</label>
                <div className="col-lg-8">
                  <span className="fw-bold fs-6 text-gray-800">{userDetails.data.name}</span>
                </div>
              </>
            )}
          </div>

          {/* <div className="row mb-7">
            <label className="col-lg-4 fw-semibold text-muted">Company</label>

            <div className="col-lg-8 fv-row">
              <span className="fw-semibold text-gray-800 fs-6">Keenthemes</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-semibold text-muted">
              Contact Phone
              <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                aria-label="Phone number must be active"
                data-bs-original-title="Phone number must be active"
                data-kt-initialized="1"
              ></i>
            </label>

            <div className="col-lg-8 d-flex align-items-center">
              <span className="fw-bold fs-6 text-gray-800 me-2">044 3276 454 935</span>

              <span className="badge badge-success">Verified</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-semibold text-muted">Company Site</label>

            <div className="col-lg-8">
              <div className="fw-semibold fs-6 text-gray-800 text-hover-primary">keenthemes.com</div>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-semibold text-muted">
              Country
              <i
                className="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                aria-label="Country of origination"
                data-bs-original-title="Country of origination"
                data-kt-initialized="1"
              ></i>
            </label>

            <div className="col-lg-8">
              <span className="fw-bold fs-6 text-gray-800">Germany</span>
            </div>
          </div>

          <div className="row mb-7">
            <label className="col-lg-4 fw-semibold text-muted">Communication</label>

            <div className="col-lg-8">
              <span className="fw-bold fs-6 text-gray-800">Email, Phone</span>
            </div>
          </div>

          <div className="row mb-10">
            <label className="col-lg-4 fw-semibold text-muted">Allow Changes</label>

            <div className="col-lg-8">
              <span className="fw-semibold fs-6 text-gray-800">Yes</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    loading: state.userDetailsReducer.loading,
    error: state.userDetailsReducer.error,
    userDetails: state.userDetailsReducer.userDetails,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    getUserDetails: () => dispatch(fetchUserDetails()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Profile);
export default connectComponent;
