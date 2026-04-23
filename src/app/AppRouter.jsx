import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import ProductsRoutes from "../modules/products/ProductRoutes";
import AuthRoutes from "../modules/auth/AuthRoutes";
import OrderRoutes from "../modules/orders/OrderRoutes";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ForbiddenPage from "./pages/ForbiddenPage/ForbiddenPage";
import { useAuthStore } from "../store/authStore";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuthStore();

  // Prevent redirect flash while Firebase initializes
  if (loading) return null;

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <MainLayout>
              <ProductsRoutes />
              <OrderRoutes />
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route path="/forbidden" element={<ForbiddenPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRouter;
