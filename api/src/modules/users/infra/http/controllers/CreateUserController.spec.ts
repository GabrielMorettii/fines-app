import request from "supertest";

import app from "@shared/infra/http/app";
import { prisma } from "@shared/infra/prisma/client";

describe("Create User Controller", () => {
  afterAll(async () => {
    await prisma.usuarios.deleteMany();

    await prisma.$disconnect();
  })

  describe("Success Cases", () => {
    it("Should be able to create a new user", async () => {
      const data = {
        username: "Jonh doe",
        password: "123456",
      };

      const response = await request(app.express).post("/users").send(data);

      expect(response.status).toBe(201);
    });
  });

  // The error cases would be covered with the unity tests
});
