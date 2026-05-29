import { useState, useEffect } from "react";
import { useGetProductsQuery } from "../api/useGetProductsQuery";
import { useDeleteProductMutation } from "../api/useDeleteProductMutation";
import { useUpdateProductMutation } from "../api/useUpdateProductMutation";
import { toast } from "sonner";
import { useDebounce } from "../../../../shared/hooks/useDebounce";

export const useProductsPageFlow = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [filters, setFilters] = useState({
    status: "",
    stockStatus: "",
  });

  const [sorts, setSorts] = useState([]);

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSort = (field, isMulti) => {
    setSorts((prevSorts) => {
      let newSorts = isMulti ? [...prevSorts] : [];
      
      const ascIndex = prevSorts.indexOf(field);
      const descIndex = prevSorts.indexOf(`-${field}`);

      if (ascIndex > -1) {
        if (isMulti) newSorts[ascIndex] = `-${field}`;
        else newSorts = [`-${field}`];
      } else if (descIndex > -1) {
        if (isMulti) newSorts.splice(descIndex, 1);
        else newSorts = [];
      } else {
        if (isMulti) newSorts.push(field);
        else newSorts = [field];
      }

      return newSorts;
    });
  };

  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm, limit, filters, sorts]);

  const { data: response, isLoading, isError, error } = useGetProductsQuery({ 
    page, 
    limit,
    search: debouncedSearchTerm,
    ...(sorts.length > 0 ? { sort: sorts.join(",") } : {}),
    ...filters
  });
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
  const pagination = response?.pagination || null;

  return {
    products,
    pagination,
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
    page,
    setPage,
    limit,
    setLimit,
    searchTerm,
    setSearchTerm,
    filters,
    handleFilterChange,
    sorts,
    handleSort,
  };
};
