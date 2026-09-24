import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
    </Routes>
  );
};

export default UserRoutes;
