export const USER_ROLES = {
  USER: "user",
  ADMIN: "admin",
  DEMO_ADMIN: "demo-admin",
};

export const USER_ROLE_OPTIONS = [
  { value: "all", label: "All Roles" },
  { value: "user", label: "Customer (User)" },
  { value: "admin", label: "Admin" },
  { value: "demo-admin", label: "Demo Admin" },
];

export const USER_STATUS_OPTIONS = [
  { value: "all", label: "All Statuses" },
  { value: "active", label: "Active" },
  { value: "suspended", label: "Suspended" },
];

export const ROLE_LABELS = {
  user: "Customer",
  admin: "Admin",
  "demo-admin": "Demo Admin",
};

export const isSameUser = (authUser, targetUser) => {
  if (!authUser || !targetUser) return false;

  const authId = authUser.id || authUser._id || authUser.userId || authUser.sub;
  const targetId = targetUser._id || targetUser.id;

  if (authId && targetId && String(authId) === String(targetId)) {
    return true;
  }

  if (
    authUser.email &&
    targetUser.email &&
    authUser.email.toLowerCase() === targetUser.email.toLowerCase()
  ) {
    return true;
  }

  return false;
};

