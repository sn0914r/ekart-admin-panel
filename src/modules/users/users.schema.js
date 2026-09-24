import { z } from "zod";

export const updateUserSchema = z
  .object({
    role: z.enum(["user", "admin", "demo-admin"]).optional(),
    isActive: z.boolean().optional(),
  })
  .refine((data) => data.role !== undefined || data.isActive !== undefined, {
    message: "At least one field (role or isActive) is required to update",
  });

export const editUserRoleSchema = z.object({
  role: z.enum(["user", "admin", "demo-admin"], {
    required_error: "Role is required",
  }),
});
