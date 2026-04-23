import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./products.api";

export const useProductsQuery = () => {
  return useQuery({
    queryKey: ["admin_products"],
    queryFn: getProducts,
  });
};

export const useCreateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_products"] });
    },
  });
};

export const useUpdateProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_products"] });
    },
  });
};

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin_products"] });
    },
  });
};
