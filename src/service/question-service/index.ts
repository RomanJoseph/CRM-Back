import questionRepository from "@/repositories/question-repository";
import { notFoundError } from "@/errors/notFoundError";
import { Question } from "@prisma/client";

async function listQuestions() {
  const questions = await questionRepository.findManyQuestions();

  if(!questions) {
    throw notFoundError();
  }

  return questions;
}

async function createQuestion({ description }: CreateQuestionParams) {
  return questionRepository.create({
    description
  });
}

async function getQuestionById(questionId: number) {
  const question = await questionRepository.findQuestionById(questionId);

  if(!question) {
    throw notFoundError();
  }

  return question;
}

export type CreateQuestionParams = Pick<Question, "description">

const questionService = { listQuestions, createQuestion, getQuestionById };

export default questionService;
