import { z as zod } from "zod";

export const loginSchema = zod.object({
  email: zod.email("Invalid email format"),
  password: zod.string().min(6, "Password must be at least 6 characters"),
});
