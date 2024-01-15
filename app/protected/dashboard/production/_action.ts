"use server";

import {
  getProductionProject,
  getProductionProjectById,
  createProductionProject,
  updateProductionProject,
  deleteProductionProject,
} from "@/lib/production-project";

import { revalidatePath } from "next/cache";

export const getProductionProjectAction = async () => {
  const productionProject = await getProductionProject();
  revalidatePath("/dashboard/production");
  return { productionProject };
};

export const getProductionProjectByIdAction = async (id: string) => {
  const productionProject = await getProductionProjectById(id);
  revalidatePath("/dashboard/production");
  return { productionProject };
};

export const createProductionProjectAction = async (data: any) => {
  const productionProject = await createProductionProject(data);
  revalidatePath("/dashboard/production");
  return { productionProject };
};

export const updateProductionProjectAction = async (id: string, data: any) => {
  const productionProject = await updateProductionProject(id, data);
  revalidatePath("/dashboard/production");
  return productionProject;
};

export const deleteProductionProjectAction = async (id: string) => {
  const productionProject = await deleteProductionProject(id);
  revalidatePath("/dashboard/production");
  return productionProject;
};
