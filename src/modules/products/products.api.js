import apiClient from "../../lib/apiClient";

export const getProducts = async () => {
  return apiClient.get("/admin/products");
};

export const createProduct = async (payload) => {
  const formData = new FormData();
  formData.append(
    "data",
    JSON.stringify({
      name: payload.name,
      price: payload.price,
      stock: payload.stock,
      isActive: payload.isActive,
      description: payload.description,
      category: payload.category ? payload.category.toLowerCase() : undefined,
      attributes: payload.attributes,
    }),
  );
  if (payload.files && payload.files.length > 0) {
    // Backend expects an array of files under "files"
    Array.from(payload.files).forEach((file) => {
      formData.append("files", file);
    });
  }
  return apiClient.post("/admin/products", formData);
};

export const updateProduct = async ({ id, payload }) => {
  return apiClient.patch(`/admin/products/${id}`, {
    name: payload.name,
    price: payload.price,
    stock: payload.stock,
    isActive: payload.isActive,
    description: payload.description,
    category: payload.category ? payload.category.toLowerCase() : undefined,
    attributes: payload.attributes,
  });
};

export const deleteProduct = async (id) => {
  return apiClient.delete(`/admin/products/${id}`);
};
