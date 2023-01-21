import registerRepository from "@/repositories/register-repository";
import { User } from "@prisma/client";
import { duplicatedEmailError } from "./errors";

export async function createUser({ email, name, phone, birthDate }: CreateUserParams) {
  await validateUniqueEmailOrFail(email);

  return registerRepository.create({
    email,
    name,
    phone,
    birthDate: new Date(birthDate)
  });
}

export async function validateUniqueEmailOrFail(email: string) {
  const userWithSameEmail = await registerRepository.findByEmail(email);
  if(userWithSameEmail) {
    throw duplicatedEmailError();
  }
}

export type CreateUserParams = Pick<User, "email" | "name" | "phone" | "birthDate">;

const registerService = {
  createUser
};

export default registerService;

