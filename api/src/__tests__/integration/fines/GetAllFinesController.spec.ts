import request from "supertest";

import app from "@shared/infra/http/app";

import { EnumServiceTypes } from "@modules/fines/dtos/EnumServiceTypes";

describe("Get All Fines Controller", () => {
  describe("Success Cases", () => {
    it("Should be able to get fines related to: all services", async () => {
      const data = {
        service: EnumServiceTypes.all,
        license_plate: "ALB8901",
        renavam: "89012345678",
        chassis: "2HGCM82633A345678",
      };

      const response = await request(app.express).get("/fines").query(data);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(3);
    });

    it("Should be able to get fines related to: detran service", async () => {
      const data = {
        service: EnumServiceTypes.DETRAN,
        state: 'AL',
        license_plate: "ALB8901",
      };

      const response = await request(app.express).get("/fines").query(data);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(1);
    });

    it("Should be able to get fines related to: dprf service", async () => {
      const data = {
        service: EnumServiceTypes.DPRF,
        state: 'AL',
        license_plate: "ALB8901",
        renavam: "89012345678",
        chassis: "2HGCM82633A345678",
      };

      const response = await request(app.express).get("/fines").query(data);

      expect(response.status).toBe(200);
      expect(response.body).toHaveLength(0);
    });
  });

  // The error cases would be covered with the unity tests
});
