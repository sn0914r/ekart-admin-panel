import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getOrders, getOrderById, updateShippingStatus } from "./orders.api";

export const useOrdersQuery = () => {
  return useQuery({
    queryKey: ["admin_orders"],
    queryFn: getOrders
  });
};

export const useOrderDetailsQuery = (orderId) => {
  return useQuery({
    queryKey: ["admin_order", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !!orderId, // Only fetch when ID is explicitly requested
  });
};

export const useUpdateShippingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateShippingStatus,
    onSuccess: (data, variables) => {
      // Invalidate specifically the modified order and the general list
      queryClient.invalidateQueries({ queryKey: ["admin_orders"] });
      if (variables.id) {
        queryClient.invalidateQueries({ queryKey: ["admin_order", variables.id] });
      }
    }
  });
};
