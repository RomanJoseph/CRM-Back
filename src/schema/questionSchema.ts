import { CreateQuestionParams } from "@/service/question-service";
import Joi from "joi";

export const questionSchema = Joi.object<CreateQuestionParams>({
  description: Joi.string().required()
});
