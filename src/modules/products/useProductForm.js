import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productFormSchema } from "./products.schema";
import {
  useCreateProductMutation,
  useUpdateProductMutation,
} from "./products.query";
import { toast } from "sonner";
import { useEffect } from "react";

export const useProductForm = (initialData, onSuccessCb) => {
  const isEditing = !!initialData;
  const createMutation = useCreateProductMutation();
  const updateMutation = useUpdateProductMutation();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
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
    },
  });

  useEffect(() => {
    if (initialData) {
      reset({
        name: initialData.name || "",
        price: initialData.price || 0,
        stock: initialData.stock || 0,
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
      reset({
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
      });
    }
  }, [initialData, reset]);

  const onSubmit = async (data) => {
    try {
      if (isEditing) {
        await updateMutation.mutateAsync({
          id: initialData._id,
          payload: data,
        });
        toast.success("Product updated successfully");
      } else {
        await createMutation.mutateAsync(data);
        toast.success("Product created successfully");
      }
      onSuccessCb?.();
    } catch (err) {
      toast.error(err.message || "Failed to save product");
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting: createMutation.isPending || updateMutation.isPending,
    isEditing,
    watch,
    setValue,
  };
};
