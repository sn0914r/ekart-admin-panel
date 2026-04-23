import { z } from "zod";

export const productSchema = z.object({
  _id: z.string(),
  name: z.string(),
  price: z.number(),
  stock: z.number(),
  images: z.array(z.string().url()).optional(),
  isActive: z.boolean(),
  category: z.string().optional(),
  description: z.string().optional(),
  attributes: z
    .object({
      color: z.string(),
      size: z.array(z.string()),
    })
    .optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

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
  files: z.any().optional(), // validation logic handled within the form
});
