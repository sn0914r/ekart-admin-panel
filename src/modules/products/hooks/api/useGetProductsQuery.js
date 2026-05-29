import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProducts } from "../../api";

export const useGetProductsQuery = (queryParams = {}) => {
  return useQuery({
    queryKey: ["admin_products", queryParams],
    queryFn: () => getProducts(queryParams),
    placeholderData: keepPreviousData,
  });
};
