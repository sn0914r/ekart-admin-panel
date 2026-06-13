import { useAuthStore } from "@app/store/authStore";
import { login } from "@modules/auth/api";
import { useMutation } from "@tanstack/react-query";
import { decodeToken } from "@modules/auth/utils/decodeToken";

export const useLoginMutation = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: (payload) => login(payload),
    onSuccess: ({ accessToken }) => {
      const token = accessToken ?? "";
      const user = decodeToken(token);

      if (user.role === "admin" || user.role === "demo-admin") {
        setAuth(user, token);
      }
    },
  });
};
