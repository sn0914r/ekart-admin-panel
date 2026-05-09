import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "../../api";

export const useDeleteProductMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["admin_products"] }),
  });
};
