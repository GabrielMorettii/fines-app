import { GetAllFinesController } from "@modules/fines/controllers/GetAllFinesController";
import { Router } from "express";

const fineRouter = Router();

fineRouter.get("/", new GetAllFinesController().handle);

export { fineRouter };
