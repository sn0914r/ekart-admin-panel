import { z } from "zod";

export const productFormSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .min(0, "Price cannot be negative"),
  stock: z
    .number({ invalid_type_error: "Stock must be a number" })
    .min(0, "Stock cannot be negative"),
  isActive: z.boolean().default(true),
  description: z
    .string()
    .min(10, "Description should be descriptive enough")
    .optional(),
  category: z.string().min(1, "Please select a category"),
  attributes: z.object({
    color: z.string().min(1, "Color is required"),
    size: z.array(z.string()).min(1, "Select at least one size"),
  }),
  files: z.any().optional(),
});
