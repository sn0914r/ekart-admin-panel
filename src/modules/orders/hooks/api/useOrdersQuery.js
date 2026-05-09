import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../api";

export const useOrdersQuery = () => {
  return useQuery({
    queryKey: ["admin_orders"],
    queryFn: getOrders,
  });
};
