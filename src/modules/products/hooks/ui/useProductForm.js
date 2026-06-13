import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "../../components/ProductFormModal/schema";
import { useCreateProductMutation } from "../api/useCreateProductMutation";
import { useUpdateProductMutation } from "../api/useUpdateProductMutation";
import { useEffect } from "react";
import { toast } from "sonner";
import { useProductAttributes } from "./useProductAttributes";
import { useProductFiles } from "./useProductFiles";

export const useProductForm = (initialData, onSuccess) => {
  const isEditing = !!initialData;

  const { mutate: createMutation, isPending: isCreating } =
    useCreateProductMutation();
  const { mutate: updateMutation, isPending: isUpdating } =
    useUpdateProductMutation();

  const defaultValues = {
    name: "",
    price: 0,
    stock: 0,
    isActive: true,
    description: "",
    category: "Shirts",
    attributes: {
      color: "",
      size: [],
    },
    files: [],
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues,
  });

  const { selectedSizes, availableSizes, handleSizeToggle } =
    useProductAttributes(watch, setValue);
  
  const { 
    selectedFiles, 
    draggedIdx,
    handleFilesChange, 
    removeFile,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    setSelectedFiles 
  } = useProductFiles(setValue);

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name || "",
        price: initialData.price || "",
        stock: initialData.stock || "",
        isActive: initialData.isActive ?? true,
        description: initialData.description || "",
        category: initialData.category
          ? initialData.category.charAt(0).toUpperCase() +
            initialData.category.slice(1)
          : "Shirts",
        attributes: {
          color: initialData.attributes?.color || "",
          size: initialData.attributes?.size || [],
        },
      });
    } else {
      reset(defaultValues);
    }
  }, [initialData, reset]);

  const onSubmit = async (data) => {
    if (isEditing) {
      updateMutation(
        { id: initialData._id, payload: data },
        {
          onSuccess: () => {
            toast.success("Product updated successfully");
            onSuccess?.();
          },
          onError: (err) => toast.error(err?.message || "Failed to update product"),
        },
      );
    } else {
      createMutation(data, {
        onSuccess: () => {
          toast.success("Product added successfully");
          onSuccess?.();
          setSelectedFiles([]); // Reset files on success
        },
        onError: (err) => toast.error(err?.message || "Failed to add product"),
      });
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting: isCreating || isUpdating,
    isEditing,
    selectedFiles,
    draggedIdx,
    selectedSizes,
    availableSizes,
    handleSizeToggle,
    handleFilesChange,
    removeFile,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    setSelectedFiles,
  };
};
