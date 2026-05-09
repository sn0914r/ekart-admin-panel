import api from "@lib/apiClient";

export const getOrders = async () => {
  return await api("/admin/orders", {
    method: "GET",
  });
};

export const getOrderById = async (orderId) => {
  return await api(`/admin/orders/${orderId}`, {
    method: "GET",
  });
};

export const updateOrderShippingStatus = async ({ orderId, status }) => {
  return api(`/admin/orders/${orderId}`, {
    method: "PATCH",
    body: {
      shippingStatus: status,
    },
  });
};
