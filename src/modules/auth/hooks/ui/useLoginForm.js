import { useNavigate, useSearchParams } from "react-router-dom";
import { useLoginMutation } from "../api/useLoginMutation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../pages/components/loginSchema";
import { decodeToken } from "../../utils";
import { toast } from "sonner";
import { logger } from "@utils/logger";
import { useEffect } from "react";

export const useLoginForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { mutateAsync: loginAsync, isPending } = useLoginMutation();

  const urlEmail = searchParams.get("email");
  const urlPassword = searchParams.get("password");
  const urlSource = searchParams.get("source") || "URL";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: urlEmail || "",
      password: urlPassword || "",
    },
  });

  const handleLogin = async (payload, isFromQuery = false) => {
    try {
      const res = await loginAsync(payload);
      const token = res?.accessToken ?? "";
      const user = decodeToken(token);

      if (user.role === "admin") {
        if (isFromQuery) {
          toast.success(`Admin ${payload.email} received from ${urlSource}`);
        } else {
          toast.success("Successfully Logged in");
        }
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

  useEffect(() => {
    if (urlEmail && urlPassword) {
      handleLogin({ email: urlEmail, password: urlPassword }, true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    register,
    errors,
    isPending,
    onSubmit: handleSubmit((data) => handleLogin(data, false)),
  };
};
