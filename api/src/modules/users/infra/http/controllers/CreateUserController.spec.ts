import request from "supertest";

import app from "@shared/infra/http/app";

describe("Create User Controller", () => {
  describe("Success Cases", () => {
    it("Should be able to create a new user", async () => {
      const data = {
        username: "Jonh doe2",
        password: "123456",
      };

      const response = await request(app.express).post("/users").send(data);

      expect(response.status).toBe(201);
    });
  });

  // The error cases would be covered with the unity tests
});
