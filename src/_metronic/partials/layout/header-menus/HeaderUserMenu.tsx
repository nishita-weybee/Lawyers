import { Link } from "react-router-dom";
import { useAuth } from "../../../../app/components/auth";
import { PROFILE } from "../../../../app/helpers/routesConstant";

export interface props {
  userDetails: any;
}

const HeaderUserMenu: React.FC<props> = ({ userDetails }) => {
  const { currentUser, logout } = useAuth();

  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px"
      data-kt-menu="true"
    >
      <div className="menu-item px-3">
        <div className="menu-content d-flex align-items-center px-3">
          <div className="symbol symbol-50px me-5">
            <span className="symbol-label bg-light-primary text-primary fw-bold fs-3">
              {userDetails?.firstName.charAt(0)}
              {userDetails?.lastName.charAt(0)}
            </span>

            {/* <img alt="Logo" src={toAbsoluteUrl("/media/avatars/300-1.jpg")} /> */}
          </div>

          <div className="d-flex flex-column">
            <div className="fw-bolder d-flex align-items-center fs-5">
              {userDetails?.firstName} {userDetails?.lastName}
            </div>
            <span className="fw-bold text-muted text-hover-primary fs-7">{userDetails?.email}</span>
          </div>
        </div>
      </div>

      <div className="separator my-2"></div>

      <div className="menu-item px-5">
        <Link to={PROFILE} className="menu-link px-5">
          Profile
        </Link>
      </div>

      <div className="menu-item px-5">
        <span onClick={logout} className="menu-link px-5">
          Sign Out
        </span>
      </div>
    </div>
  );
};

export { HeaderUserMenu };
