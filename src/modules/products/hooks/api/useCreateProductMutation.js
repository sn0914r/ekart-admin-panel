import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createProduct } from "../../api";

export const useCreateProductMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createProduct,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin_products"] }),
  });
};
