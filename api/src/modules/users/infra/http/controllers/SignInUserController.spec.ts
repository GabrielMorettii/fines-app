import request from "supertest";

import app from "@shared/infra/http/app";
import { prisma } from "@shared/infra/prisma/client";
import { BcrypyHashProvider } from "@shared/container/providers";

describe("Sign In User Controller", () => {
  beforeAll(async () => {
    const data = {
      username: "Jonh doe",
      password: "123456",
    };

    const hashedPassword = await new BcrypyHashProvider().hash(
      data.password,
      8
    );

    await prisma.usuarios.create({
      data: {
        username: data.username,
        senha: hashedPassword,
      },
    });
  });

  afterAll(async () => {
    await prisma.usuarios.deleteMany();

    await prisma.$disconnect();
  });

  describe("Success Cases", () => {
    it("Should be able to sign in a user", async () => {
      const data = {
        username: "Jonh doe",
        password: "123456",
      };

      const response = await request(app.express)
        .post("/users/sign-in")
        .send(data);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token");
    });
  });

  // The error cases would be covered with the unity tests
});
