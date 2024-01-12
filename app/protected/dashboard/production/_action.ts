"use server";

import {
  getProductionProject,
  createProductionProject,
  updateProductionProject,
  deleteProductionProject,
} from "@/lib/production-project";

export const getProductionProjectAction = async () => {
  const productionProject = await getProductionProject();
  return { productionProject };
};

export const createProductionProjectAction = async (data: any) => {
  const productionProject = await createProductionProject(data);
  return { productionProject };
};

export const updateProductionProjectAction = async (id: string, data: any) => {
  const productionProject = await updateProductionProject(id, data);
  return productionProject;
};

export const deleteProductionProjectAction = async (id: string) => {
  const productionProject = await deleteProductionProject(id);
  return productionProject;
};

// import {
//   getQuestions,
//   createQuestion,
//   updateQuestion,
//   deleteQuestion,
// } from "@/lib/questions";

// import { revalidatePath } from "next/cache";

// export const getQuestionsAction = async () => {
//   const questions = await getQuestions();
//   return { questions };
// };

// export const createQuestionAction = async (data: any) => {
//   const question = await createQuestion(data);
//   revalidatePath("/dashboard/faq");
//   return question;
// };

// export const updateQuestionAction = async (id: string, data: any) => {
//   const question = await updateQuestion(id, data);
//   revalidatePath("/dashboard/faq");
//   return question;
// };

// export const deleteQuestionAction = async (id: string) => {
//   const question = await deleteQuestion(id);
//   revalidatePath("/dashboard/faq");
//   return question;
// };
