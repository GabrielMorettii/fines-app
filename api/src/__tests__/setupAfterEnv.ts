import { prisma } from "@libs/prisma";

global.afterAll(async () => {
  try {
    await prisma.$disconnect();
  } catch (error) {
    throw new Error(error as string);
  }
});
