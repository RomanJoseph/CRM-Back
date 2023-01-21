import { CreateUserParams } from "@/service/register-service";
import Joi from "joi";

export const registerUserSchema = Joi.object<CreateUserParams>({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  phone: Joi.string().required(),
  birthDate: Joi.string().required()
});
