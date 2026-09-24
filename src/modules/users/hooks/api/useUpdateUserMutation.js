import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../api";

export const useUpdateUserMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["admin_users"] });
      if (variables?.userId) {
        queryClient.invalidateQueries({
          queryKey: ["admin_users", variables.userId],
        });
      }
    },
  });
};
