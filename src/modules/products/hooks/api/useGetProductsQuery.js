import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api";

export const useGetProductsQuery = () => {
  return useQuery({
    queryKey: ["admin_products"],
    queryFn: getProducts,
  });
};
