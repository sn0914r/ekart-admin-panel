import { useQuery } from "@tanstack/react-query";
import { getOrderById } from "../../api";

export const useGetOrderById = (orderId) => {
  return useQuery({
    queryKey: ["admin_orders", orderId],
    queryFn: () => getOrderById(orderId),
    enabled: !!orderId,
  });
};
