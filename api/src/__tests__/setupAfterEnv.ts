import { prisma } from "@shared/infra/prisma/client";

global.afterAll(async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    throw new Error(error as string);
  }
});
