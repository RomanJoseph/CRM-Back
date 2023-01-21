import { Router } from "express";

import { questionSchema } from "@/schema";
import { validateBody } from "@/middlewares/validation-middleware";
import { postQuestion, getAllQuestions, getOneQuestionById } from "@/controllers/question-controller";

const questionRouter = Router();

questionRouter.get("/", getAllQuestions);
questionRouter.get("/:questionId", getOneQuestionById);
questionRouter.post("/", validateBody(questionSchema), postQuestion);

export { questionRouter };
