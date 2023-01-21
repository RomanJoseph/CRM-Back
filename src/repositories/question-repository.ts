import { Prisma } from "@prisma/client";
import { prisma } from "@/config";

async function create(data: Prisma.QuestionUncheckedCreateInput) {
  return prisma.question.create({
    data,
  });
}

async function findManyQuestions() {
  return prisma.question.findMany();
}

async function findQuestionById(questionId: number) {
  return prisma.question.findFirst({
    where: {
      id: questionId
    }
  });
}

const questionRepository = { create, findManyQuestions, findQuestionById };

export default questionRepository;
