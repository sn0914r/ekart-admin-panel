import api from "@lib/apiClient";

export const getOrders = async (params = {}) => {
  const { search = "", paymentStatus = "", orderStatus = "", shippingStatus = "", sort = "", page = 1, limit = 10 } = params;
  const searchParams = new URLSearchParams();
  
  if (search) searchParams.append("search", search);
  if (paymentStatus) searchParams.append("paymentStatus", paymentStatus);
  if (orderStatus) searchParams.append("orderStatus", orderStatus);
  if (shippingStatus) searchParams.append("shippingStatus", shippingStatus);
  if (sort) searchParams.append("sort", sort);
  if (page > 1) searchParams.append("page", page);
  if (limit) searchParams.append("limit", limit);
  
  const query = searchParams.toString() ? `?${searchParams.toString()}` : "";
  return await api(`/admin/orders${query}`, {
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
