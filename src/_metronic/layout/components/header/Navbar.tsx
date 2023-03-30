import clsx from "clsx";
import { HeaderUserMenu, ThemeModeSwitcher } from "../../../partials";
import { useLayout } from "../../core";
import { fetchUserDetails } from "../../../../app/reducers/userReducers/userAction";
import { connect } from "react-redux";
import { useEffect } from "react";

const itemClass = "ms-1 ms-lg-3";
const btnClass = "btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px";
const userAvatarClass = "symbol-35px symbol-md-40px";
const btnIconClass = "svg-icon-1";

export interface props {
  loading: boolean;
  userDetails: any;
  error: string;
  getUserDetails: any;
}

const Navbar: React.FC<props> = ({ getUserDetails, loading, error, userDetails }) => {
  const { config } = useLayout();
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);
  console.log(userDetails);
  return (
    <div className="app-navbar flex-shrink-0">
      <div className={clsx("app-navbar-item", itemClass)}>
        <ThemeModeSwitcher toggleBtnClass={clsx("btn-active-light-primary btn-custom")} />
      </div>

      <div className={clsx("app-navbar-item", itemClass)}>
        <div
          className={clsx("cursor-pointer symbol", userAvatarClass)}
          data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
          data-kt-menu-attach="parent"
          data-kt-menu-placement="bottom-end"
        >
          {/* <img src={toAbsoluteUrl("/media/avatars/300-1.jpg")} alt="" /> */}
          <div className="symbol symbol-50px">
            <span className="symbol-label bg-light-primary text-primary fw-bold fs-4">
              {userDetails?.data?.firstName.charAt(0)}
              {userDetails?.data?.lastName.charAt(0)}
            </span>
          </div>
        </div>
        <HeaderUserMenu userDetails={userDetails?.data} />
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
const connectComponent = connect(mapStateToProps, mapDispatchToProps)(Navbar);
export default connectComponent;
