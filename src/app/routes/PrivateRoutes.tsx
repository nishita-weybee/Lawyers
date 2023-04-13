import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import { DashboardWrapper } from "../components/dashboard/DashboardWrapper";
import BuilderPageWrapper from "../components/layout-builder/BuilderPageWrapper";
import { ADD_CASE, ADD_USER, DASHBOARD, EDIT_CASE, EDIT_PROFILE, EDIT_USER, PROFILE, VIEW_CASE, VIEW_USER } from "../helpers/routesConstant";
import AddUser from "../components/pages/user/AddUser";
import ViewUser from "../components/pages/user/ViewUser";
import hasPermission, { actionsRole } from "../components/auth/core/hasPermissions";
import EditProfile from "../components/pages/user/EditProfile";
import Masters from "../components/pages/masters/Masters";
import EditDetails from "../components/pages/masters/EditDetails";
import AddCase from "../components/pages/case/AddCase";
import MyProfile from "../components/pages/user/MyProfile";
import ViewCase from "../components/pages/case/ViewCase";
import Dashboard from "../components/pages/Dashboard/Dashboard";

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
            <Route path={`${EDIT_USER}/:id`} element={<AddUser />} />
            <Route path={DASHBOARD} element={<Dashboard />} />
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
          <Route path={PROFILE} element={<MyProfile />} />
          <Route path={EDIT_PROFILE} element={<EditProfile />} />
          <Route path={ADD_CASE} element={<AddCase />} />
          <Route path={VIEW_CASE} element={<ViewCase />} />
          <Route path={`${EDIT_CASE}/:id`} element={<AddCase />} />
        </>
        {/* )} */}

        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="builder" element={<BuilderPageWrapper />} />
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

// const SuspensedView: FC<WithChildren> = ({ children }) => {
//   const baseColor = getCSSVariableValue("--kt-primary");
//   TopBarProgress.config({
//     barColors: {
//       "0": baseColor,
//     },
//     barThickness: 1,
//     shadowBlur: 5,
//   });
//   return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
// };

export { PrivateRoutes };
