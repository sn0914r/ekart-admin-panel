import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AuthLayout from "../../shared/layout/AuthLayout/AuthLayout";

const AuthRoutes = () => {
  return (
    <AuthLayout>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthLayout>
  );
};

export default AuthRoutes;
