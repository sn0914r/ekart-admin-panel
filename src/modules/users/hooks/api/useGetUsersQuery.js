import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getUsers } from "../../api";

export const useGetUsersQuery = (params = {}) => {
  return useQuery({
    queryKey: ["admin_users", params],
    queryFn: () => getUsers(params),
    placeholderData: keepPreviousData,
  });
};
