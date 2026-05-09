import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../api/useLoginMutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../pages/components/loginSchema";
import { decodeToken } from "../../utils";
import { toast } from "sonner";
import { logger } from "@utils/logger";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginAsync, isPending } = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (payload) => {
    try {
      const res = await loginAsync(payload);
      const token = res?.accessToken ?? "";
      const user = decodeToken(token);

      if (user.role === "admin") {
        toast.success("Successfully Logged in");
        navigate("/");
      } else {
        toast.error("Access denied. Admin privileges required.");
        navigate("/forbidden");
      }
    } catch (error) {
      toast.error(error?.message || "Login failed");
      logger.error("[LOGIN ERROR]", error)
    }
  };

  return {
    register,
    errors,
    isPending,
    onSubmit: handleSubmit(onSubmit),
  };
};
