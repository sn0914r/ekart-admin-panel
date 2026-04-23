import apiClient from "../../lib/apiClient";

export const getOrders = async () => {
  return apiClient.get("/admin/orders");
};

export const getOrderById = async (id) => {
  return apiClient.get(`/admin/orders/${id}`);
};

export const updateShippingStatus = async ({ id, status }) => {
  return apiClient.patch(`/admin/orders/${id}`, { shippingStatus: status });
};
