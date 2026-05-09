import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrderShippingStatus } from "../../api";

export const useUpdateShippingMutation = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: updateOrderShippingStatus,
    onSuccess: (_, variables) => {
      qc.invalidateQueries({ queryKey: ["admin_orders"] });

      if (variables.orderId) {
        qc.invalidateQueries({ queryKey: ["admin_orders", variables.orderId] });
      }
    },
  });
};
