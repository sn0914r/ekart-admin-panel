import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getOrders } from "../../api";

export const useOrdersQuery = (filters = {}) => {
  return useQuery({
    queryKey: ["admin_orders", filters],
    queryFn: () => getOrders(filters),
    placeholderData: keepPreviousData,
  });
};
