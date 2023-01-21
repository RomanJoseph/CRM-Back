import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

async function main() {
  let user = await prisma.user.findFirst();
  if(!user){
    user = await prisma.user.create({
        data: {
            email: "email@email.com",
            name: "name",
            birthDate: new Date("30-08-2001"),
            phone: "123456789"
        }
    })
  }

  console.log({user})
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });