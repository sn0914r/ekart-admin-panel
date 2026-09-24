import { useQuery } from "@tanstack/react-query";
import { getUserById } from "../../api";

export const useGetUserByIdQuery = (userId) => {
  return useQuery({
    queryKey: ["admin_users", userId],
    queryFn: () => getUserById(userId),
    enabled: Boolean(userId),
  });
};
