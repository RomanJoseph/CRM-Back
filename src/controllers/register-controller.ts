import registerService from "@/service/register-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function registerPost(req: Request, res: Response) {
  const { email, name, birthDate, phone } = req.body;

  try {
    const user = await registerService.createUser({ email, name, birthDate, phone });
    return res.status(httpStatus.CREATED).json({
      id: user.id,
      email: user.email,
      name: user.name,
      birthDate: user.birthDate,
      phone: user.phone
    });
  } catch (error) {
    if(error.name === "DuplicateEmailError") {
      return res.status(httpStatus.CONFLICT).send(error);
    }
    return res.status(httpStatus.BAD_REQUEST).send(error);
  }
}
