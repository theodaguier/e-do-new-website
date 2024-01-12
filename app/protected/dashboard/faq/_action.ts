"use server";

import {
  getQuestions,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from "@/lib/questions";

import { revalidatePath } from "next/cache";

export const getQuestionsAction = async () => {
  const questions = await getQuestions();
  return { questions };
};

export const createQuestionAction = async (data: any) => {
  const question = await createQuestion(data);
  revalidatePath("/dashboard/faq");
  return question;
};

export const updateQuestionAction = async (id: string, data: any) => {
  const question = await updateQuestion(id, data);
  revalidatePath("/dashboard/faq");
  return question;
};

export const deleteQuestionAction = async (id: string) => {
  const question = await deleteQuestion(id);
  revalidatePath("/dashboard/faq");
  return question;
};
