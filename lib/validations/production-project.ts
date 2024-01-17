import { z } from "zod";

export const createProductionSchema = z.object({
  client: z.string().min(2).max(255),
  role: z.string().min(2).max(255),
  description: z.string().min(2).max(255),
  year: z.coerce.number().min(1900).max(2024),
  images: z.array(
    z.object({
      url: z.string(),
      alt: z.string(),
    })
  ),
});

export const updateProductionSchema = z.object({
  client: z.string().min(2).max(255).optional(),
  role: z.string().min(2).max(255).optional(),
  description: z.string().min(2).max(255).optional(),
  year: z.coerce.number().min(1900).max(2024).optional(),
  images: z.array(
    z.object({
      url: z.string().optional(),
      alt: z.string().optional(),
    })
  ),
});
