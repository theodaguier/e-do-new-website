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
