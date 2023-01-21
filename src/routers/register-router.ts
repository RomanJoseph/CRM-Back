import { Router } from "express";

import { registerUserSchema } from "@/schema";
import { validateBody } from "@/middlewares/validation-middleware";
import { registerPost } from "@/controllers";

const registerRouter = Router();

registerRouter.post("/", validateBody(registerUserSchema), registerPost);

export { registerRouter };
