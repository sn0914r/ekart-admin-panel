import { Routes, Route } from "react-router-dom";
import MainLayout from "../shared/layout/MainLayout";
import ProductsRoutes from "../modules/products/ProductRoutes";
import AuthRoutes from "../modules/auth/AuthRoutes";
import OrderRoutes from "../modules/orders/OrderRoutes";
import DashboardRoutes from "../modules/dashbaord/DashboardRoutes";
import AnalyticsRoute from "../modules/analytics/AnalyticsRoute";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ForbiddenPage from "./pages/ForbiddenPage/ForbiddenPage";
import ProtectedRoute from "../shared/components/ProtectedRoute";
import { useAuthStore } from "@app/store/authStore";

const AppRouter = () => {
  const isHydrated = useAuthStore((state) => state.isHydrated);

  if (!isHydrated) return null;

  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute allowedRoles={["admin", "demo-admin"]}>
            <MainLayout>
              <Routes>
                <Route path="/" element={<DashboardRoutes />} />
                <Route path="/products/*" element={<ProductsRoutes />} />
                <Route path="/orders/*" element={<OrderRoutes />} />
                <Route path="/analytics/*" element={<AnalyticsRoute />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </MainLayout>
          </ProtectedRoute>
        }
      />
      <Route path="/forbidden" element={<ForbiddenPage />} />
    </Routes>
  );
};

export default AppRouter;
