import { useMutation } from "@tanstack/react-query";
import { loginWithEmail } from "./auth.api";
import { useAuthStore } from "../../store/authStore";

export const useLoginMutation = () => {
  const setUser = useAuthStore((state) => state.setUser);

  return useMutation({
    mutationFn: loginWithEmail,
    onSuccess: (data) => {
      // Data contains the normalized success response
      setUser(data.data);
    },
    // The consumer (the form hook) will handle onError
  });
};
