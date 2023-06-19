import request from "supertest";

import { hash } from 'bcrypt';

import app from "@shared/infra/http/app";
import { prisma } from "@shared/infra/prisma/client";

describe("Sign In User Controller", () => {
  beforeAll(async () => {
    const user = {
      username: "Jonh doe",
      password: "123456"
    }

    const hashedPassword = await hash(user.password, 8)

    await prisma.$queryRaw`INSERT INTO usuarios (username, senha) VALUES
      (${user.username}, ${hashedPassword})`;
  })

  describe("Success Cases", () => {
    it("Should be able to sign in a user", async () => {
      const data = {
        username: "Jonh doe",
        password: "123456",
      };

      const response = await request(app.express).post("/users/sign-in").send(data);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token")
    });
  });

  // The error cases would be covered with the unity tests
});
