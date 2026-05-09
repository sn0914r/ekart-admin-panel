import api from "@lib/apiClient";

export const getProducts = async () => {
  return await api("/admin/products", {
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