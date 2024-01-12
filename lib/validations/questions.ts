import { z } from "zod";

export const createQuestionSchema = z.object({
  question: z.string().min(3).max(255),
  answer: z.string().min(3).max(255),
  category: z.string().min(3).max(255),
});
