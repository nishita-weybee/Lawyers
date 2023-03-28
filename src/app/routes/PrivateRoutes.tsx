import { FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { DashboardWrapper } from "../components/dashboard/DashboardWrapper";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import BuilderPageWrapper from "../components/layout-builder/BuilderPageWrapper";
import { ADD_USER, EDIT_PROFILE, PROFILE, VIEW_USER } from "../helpers/routesConstant";
import AddUser from "../components/pages/user/AddUser";
import ViewUser from "../components/pages/user/ViewUser";
import Profile from "../components/pages/user/Profile";
import hasPermission, { actionsRole } from "../components/auth/core/hasPermissions";
import EditProfile from "../components/pages/user/EditProfile";
import Masters from "../components/pages/masters/Masters";
import AddDetails from "../components/pages/masters/AddDetails";
import EditDetails from "../components/pages/masters/EditDetails";

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<MasterLayout />}>
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* for admin */}
        {hasPermission(actionsRole.VIEW_FILE) && (
          <>
            <Route path={ADD_USER} element={<AddUser />} />
            <Route path={VIEW_USER} element={<ViewUser />} />
            <Route>
              <Route path={"/masters/:masters"} element={<Masters />} />
              <Route path={"/masters/add-:masters"} element={<EditDetails />} />
              <Route path={"/masters/edit-:masters/:id"} element={<EditDetails />} />
            </Route>
          </>
        )}
        {/* for employee */}
        {/* {hasPermission(actionsRole.ONLY_ADMIN) && ( */}
        <>
          <Route path={PROFILE} element={<Profile />} />
          <Route path={EDIT_PROFILE} element={<EditProfile />} />
        </>
        {/* )} */}

        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="builder" element={<BuilderPageWrapper />} />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--kt-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
