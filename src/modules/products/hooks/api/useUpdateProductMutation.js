import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "../../api";

export const useUpdateProductMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }) => updateProduct({ id, payload }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin_products"] }),
  });
};
