import { useAuthStore } from "@app/store/authStore";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { logout as logoutAPI } from "@modules/auth/api";

export const useLogoutMutation = () => {
  const logout = useAuthStore((state) => state.logout);
  const qc = useQueryClient();

  return useMutation({
    mutationFn: logoutAPI,
    onSettled: () => {
      logout();
      qc.clear();
    },
  });
};
