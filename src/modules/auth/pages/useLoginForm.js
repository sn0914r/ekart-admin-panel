import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../auth.schema";
import { useLoginMutation } from "../auth.query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useAuthForm = () => {
  const navigate = useNavigate();
  const { mutateAsync: loginMutation, isPending } = useLoginMutation();

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

  const onSubmit = async (data) => {
    try {
      await loginMutation(data);
      toast.success("Successfully logged in!");
      navigate("/");
    } catch (error) {
      toast.error(
        error.message || "Failed to login. Please check your credentials.",
      );
    }
  };

  return {
    register,
    errors,
    isPending,
    onSubmit: handleSubmit(onSubmit),
  };
};
