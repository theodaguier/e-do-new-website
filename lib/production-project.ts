/**
 * model ProductionProject {
  id        String   @id @default(uuid())
  client    String
  role      String
  description String
  year      Int
  images    Image[]  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Image {
  id        String   @id @default(uuid())
  url       String
  alt       String
  projectId String  
  project   ProductionProject @relation(fields: [projectId], references: [id])
  createdAt DateTime @default(now())
}
 * 
 */

import prisma from "./db";

export async function getProductionProject() {
  try {
    const productionProjects = await prisma.productionProject.findMany();
    return { productionProjects };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function getProductionProjectById(id: string) {
  try {
    const productionProject = await prisma.productionProject.findUnique({
      where: {
        id,
      },
    });

    const images = await prisma.image.findMany({
      where: {
        projectId: id,
      },
    });

    return { productionProject, images };
  } catch (error) {
    console.log(error);
  }
}

export async function createProductionProject(data: any) {
  try {
    const productionProject = await prisma.productionProject.create({
      data: {
        client: data.client,
        role: data.role,
        description: data.description,
        year: data.year,
      },
    });

    const images = await Promise.all(
      data.images.map((image: any) => {
        return prisma.image.create({
          data: {
            url: image.url,
            alt: image.alt,
            projectId: productionProject.id,
          },
        });
      })
    );

    return { productionProject, images };
  } catch (error) {
    console.log(error);
  }
}

export async function updateProductionProject(id: string, data: any) {
  try {
    const { images, ...projectData } = data;

    const productionProject = await prisma.productionProject.update({
      where: { id },
      data: projectData,
    });

    // Créer les nouvelles images
    const createdImages = await Promise.all(
      images.map((image: any) =>
        prisma.image.create({
          data: {
            ...image,
            projectId: productionProject.id,
          },
        })
      )
    );

    return { productionProject, images: createdImages };
  } catch (error) {
    console.log(error);
  }
}
export async function deleteProductionProject(id: string) {
  try {
    const images = await prisma.image.deleteMany({
      where: {
        projectId: id, // Supprimez d'abord toutes les images associées
      },
    });

    const productionProject = await prisma.productionProject.delete({
      where: {
        id,
      },
    });

    return productionProject;
  } catch (error) {
    console.log(error);
  }
}
