import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { EDIT_PROFILE } from "../../../helpers/routesConstant";
import { fetchUserDetails } from "../../../reducers/userReducers/userAction";
import ProfileDetail from "../../common/ProfileDetail";
export interface Props {
  loading: boolean;
  userDetails: any;
  error: string;
  getUserDetails: any;
}
const Profile: React.FC<Props> = ({ getUserDetails, loading, error, userDetails }) => {
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);

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
          {userDetails.data && (
            <>
              <ProfileDetail
                label="Full Name"
                value={`${userDetails.data.firstName} ${userDetails.data.middleName !== null ? userDetails.data.middleName : ""} ${
                  userDetails.data.lastName
                }`}
              />
              <ProfileDetail label="Email" value={userDetails.data.email} />
              <ProfileDetail label="Contact Phone" value={userDetails.data.phoneNumber} />
            </>
          )}
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
