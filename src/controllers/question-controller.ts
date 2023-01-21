import { Request, Response } from "express";
import questionService from "@/service/question-service";
import httpStatus from "http-status";

export async function postQuestion(req: Request, res: Response) {
  const { description } = req.body;

  try {
    const question = await questionService.createQuestion({ description });
    return res.status(httpStatus.CREATED).json({
      id: question.id,
      description: question.description
    });
  } catch (error) {
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}

export async function getAllQuestions(req: Request, res: Response) {
  try {
    const questions = await questionService.listQuestions();
    return res.status(httpStatus.OK).json(questions);
  } catch (error) {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}

export async function getOneQuestionById(req: Request, res: Response) {
  const { questionId } = req.params;
  try {
    const question = await questionService.getQuestionById(Number(questionId));
    return res.status(httpStatus.OK).send({ id: question.id, description: question.description });
  } catch (error) {
    if(error.name === "NotFoundError") {
      return res.status(httpStatus.NOT_FOUND).send(error);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
}
