import { Router } from "express";
import { GetAllFinesController } from "@modules/fines/infra/http/controllers/GetAllFinesController";

const fineRouter = Router();

fineRouter.get("/", new GetAllFinesController().handle);

export { fineRouter };
