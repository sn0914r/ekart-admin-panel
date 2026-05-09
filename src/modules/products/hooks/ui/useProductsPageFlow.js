import { useState } from "react";
import { useGetProductsQuery } from "../api/useGetProductsQuery";
import { useDeleteProductMutation } from "../api/useDeleteProductMutation";
import { useUpdateProductMutation } from "../api/useUpdateProductMutation";
import { toast } from "sonner";

export const useProductsPageFlow = () => {
  const { data: response, isLoading, isError, error } = useGetProductsQuery();
  const deleteMutation = useDeleteProductMutation();
  const updateMutation = useUpdateProductMutation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleToggleStatus = (product) => {
    toast.info("Updating status...");
    const newStatus = !product.isActive;
    updateMutation.mutate(
      {
        id: product._id,
        payload: { ...product, isActive: newStatus },
      },
      {
        onSuccess: () => {
          toast.success(
            `Product successfully ${newStatus ? "activated" : "deactivated"}!`,
          );
        },
        onError: () => {
          toast.error("Failed to update status");
        },
      },
    );
  };

  const handleAdd = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      deleteMutation.mutate(productToDelete._id, {
        onSuccess: () => {
          toast.success("Product deleted successfully");
          setProductToDelete(null);
        },
        onError: () => {
          toast.error("Failed to delete product");
        },
      });
    }
  };

  const products = response?.data || [];

  return {
    products,
    isLoading,
    isError,
    error,
    isModalOpen,
    setIsModalOpen,
    editingProduct,
    productToDelete,
    setProductToDelete,
    handleToggleStatus,
    handleAdd,
    handleEdit,
    handleDeleteClick,
    handleConfirmDelete,
    isDeleting: deleteMutation.isPending,
  };
};
