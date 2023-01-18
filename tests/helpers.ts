import { User } from "@prisma/client";

import { createUser } from "./factories/users-factory";
import { prisma } from "./config";

export async function cleanDb() {
  await prisma.user.deleteMany({})
}