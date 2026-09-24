import api from "@lib/apiClient";

export const getUsers = async (params = {}) => {
  const {
    page = 1,
    limit = 10,
    search = "",
    role = "",
    isActive = "",
    sort = "",
  } = params;

  const searchParams = new URLSearchParams();

  if (page) searchParams.append("page", page);
  if (limit) searchParams.append("limit", limit);
  if (search) searchParams.append("search", search);
  if (role && role !== "all") searchParams.append("role", role);
  if (isActive && isActive !== "all") {
    // isActive can be 'active' | 'suspended' from UI, or 'true' | 'false'
    const activeValue = isActive === "active" ? "true" : isActive === "suspended" ? "false" : isActive;
    searchParams.append("isActive", activeValue);
  }
  if (sort) searchParams.append("sort", sort);

  const query = searchParams.toString() ? `?${searchParams.toString()}` : "";
  return await api(`/admin/users${query}`, {
    method: "GET",
  });
};

export const getUserById = async (userId) => {
  if (!userId) throw new Error("User ID is required");
  return await api(`/admin/users/${userId}`, {
    method: "GET",
  });
};

export const updateUser = async ({ userId, payload }) => {
  if (!userId) throw new Error("User ID is required");
  return await api(`/admin/users/${userId}`, {
    method: "PATCH",
    body: payload,
  });
};
