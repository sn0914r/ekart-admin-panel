import { useQuery } from "@tanstack/react-query";
import { getProductMeta } from "../../api";

export const useGetProductMetaQuery = () => {
  return useQuery({
    queryKey: ["product_meta"],
    queryFn: getProductMeta,
    staleTime: 1000 * 60 * 30, // 30 minutes cache
    select: (res) => res?.data,
  });
};
