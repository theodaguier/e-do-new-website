import prisma from "./db";

export async function getQuestions() {
  try {
    const questions = await prisma.question.findMany();
    return { questions };
  } catch (error) {
    console.log(error);
    return { error };
  }
}

export async function getQuestionById(id: string) {
  try {
    const question = await prisma.question.findUnique({
      where: {
        id,
      },
    });
    return question;
  } catch (error) {
    console.log(error);
  }
}

export async function createQuestion(data: any) {
  try {
    const question = await prisma.question.create({
      data,
    });
    return question;
  } catch (error) {
    console.log(error);
  }
}

export async function updateQuestion(id: string, data: any) {
  try {
    const question = await prisma.question.update({
      where: {
        id,
      },
      data,
    });
    return question;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteQuestion(id: string) {
  try {
    const question = await prisma.question.delete({
      where: {
        id,
      },
    });
    return question;
  } catch (error) {
    console.log(error);
  }
}
