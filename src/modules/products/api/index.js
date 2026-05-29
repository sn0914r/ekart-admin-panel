import api from "@lib/apiClient";

export const getProducts = async (queryParams = {}) => {
  const { page = 1, limit = 10, search = "", status = "", stockStatus = "", sort = "" } = queryParams;
  const urlParams = new URLSearchParams({ page, limit });
  if (search) {
    urlParams.append("search", search);
  }
  if (status) {
    urlParams.append("status", status);
  }
  if (stockStatus) {
    urlParams.append("stockStatus", stockStatus);
  }
  if (sort) {
    urlParams.append("sort", sort);
  }
  const queryString = urlParams.toString();
  return await api(`/admin/products?${queryString}`, {
    method: "GET",
  });
};

const mapProductData = (payload) => ({
  name: payload.name,
  price: payload.price,
  stock: payload.stock,
  isActive: payload.isActive,
  description: payload.description,
  category: payload.category ? payload.category.toLowerCase() : undefined,
  attributes: payload.attributes,
});

export const createProduct = async (payload) => {
  const formData = new FormData();

  formData.append("data", JSON.stringify(mapProductData(payload)));

  if (payload.files && payload.files.length > 0) {
    Array.from(payload.files).forEach((file) => formData.append("files", file));
  }

  return await api("/admin/products", {
    method: "POST",
    body: formData
  });
};

export const updateProduct = async ({ id, payload }) => {
  return await api(`/admin/products/${id}`, {
    method: "PATCH",
    body: mapProductData(payload),
  });
};

export const deleteProduct = async (id) => {
  return await api(`/admin/products/${id}`, {
    method: "DELETE",
  });
};