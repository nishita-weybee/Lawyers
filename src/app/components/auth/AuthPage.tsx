import { Route, Routes } from "react-router-dom";
import { ForgotPassword } from "./components/ForgotPassword";
import { Login } from "./components/Login";
import { AuthLayout } from "./AuthLayout";
import { ChangePassword } from "./components/ChangePassword";
import { CHANGE_PASSWORD, FORGOT_PASSWORD, LOGIN } from "../../helpers/routesConstant";

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path={LOGIN} element={<Login />} />
      {/* <Route path="registration" element={<Registration />} /> */}
      <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      <Route path={CHANGE_PASSWORD} element={<ChangePassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
);

export { AuthPage };
