import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { EDIT_PROFILE } from "../../../helpers/routesConstant";
import Loader from "../../common/loader/Loader";

export interface props {
  loading: boolean;
  userDetails: any;
  error: string;
  // getUserDetails: any;
}

const ProfileDetails: React.FC<props> = ({ loading, error, userDetails }) => {
  const navigate = useNavigate();
  useEffect(() => {
    // getUserDetails();
  }, []);


  return (
    <div className="card mb-5 mb-xl-10">
      <div
        className="card-header border-0 cursor-pointer"
        role="button"
        data-bs-toggle="collapse"
        data-bs-target="#kt_account_profile_details"
        aria-expanded="true"
        aria-controls="kt_account_profile_details"
      >
        <div className="card-title m-0">
          <h3 className="fw-bolder m-0">Profile Details</h3>
        </div>
        <button
          className="btn btn-primary align-self-center"
          onClick={(e: any) => {
            e.stopPropagation();
            navigate(`${EDIT_PROFILE}`);
          }}
        >
          Edit Profile
        </button>
      </div>

      <div id="kt_account_profile_details" className="collapse show">
        <form noValidate className="form">
          <div className="card-body border-top p-9">
            {loading && <Loader />}
            {userDetails.data && (
              <>
                <div className="row mb-7">
                  <label className="col-lg-4 fw-semibold text-muted">Full Name</label>
                  <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">{`${userDetails.data.firstName} ${
                      userDetails.data.middleName !== null ? userDetails.data.middleName : ""
                    } ${userDetails.data.lastName}`}</span>
                  </div>
                </div>

                <div className="row mb-7">
                  <label className="col-lg-4 fw-semibold text-muted">Email</label>
                  <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">{userDetails.data.email}</span>
                  </div>
                </div>

                <div className="row mb-7">
                  <label className="col-lg-4 fw-semibold text-muted">Mobile</label>
                  <div className="col-lg-8">
                    <span className="fw-bold fs-6 text-gray-800">{userDetails.data.phoneNumber}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </form>
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
    // getUserDetails: () => dispatch(fetchUserDetails()),
  };
};
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(ProfileDetails);
export default connectComponent;
