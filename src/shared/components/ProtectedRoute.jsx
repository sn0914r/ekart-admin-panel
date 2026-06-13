import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "@app/store/authStore";

/**
 * ProtectedRoute component to guard routes based on authentication and roles.
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {string[]} [props.allowedRoles]
 * @returns {React.ReactNode}
 */
const ProtectedRoute = ({ children, allowedRoles = ["admin", "demo-admin"] }) => {
  const { user, isHydrated, accessToken } = useAuthStore();

  // Show nothing until hydration is complete to prevent redirect flashes
  if (!isHydrated) return null;

  // If no user or no token, redirect to login
  if (!user || !accessToken) {
    return <Navigate to="/auth/login" replace />;
  }

  // If allowed roles are defined and user doesn't have one of them, redirect to forbidden
  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/forbidden" replace />;
  }

  return children;
};

export default ProtectedRoute;
