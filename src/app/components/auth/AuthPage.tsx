import { Route, Routes } from "react-router-dom";
import  ForgotPassword  from "./components/ForgotPassword";
import  Login  from "./components/Login";
import { AuthLayout } from "./AuthLayout";
import  ResetPassword  from "./components/ResetPassword";
import { RESET_PASSWORD, FORGOT_PASSWORD, LOGIN } from "../../helpers/routesConstant";

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path={LOGIN} element={<Login />} />
      {/* <Route path="registration" element={<Registration />} /> */}
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={RESET_PASSWORD} element={<ResetPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
);

export { AuthPage };
