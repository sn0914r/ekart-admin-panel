import { Routes, Route } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";

const OrderRoutes = () => {
  return (
    <Routes>
      <Route path="/orders" element={<OrdersPage />} />
    </Routes>
  );
};

export default OrderRoutes;
