import { CreateUserController } from "@modules/users/infra/http/controllers/CreateUserController";
import { SignInUserController } from "@modules/users/infra/http/controllers/SignInUserController";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/", new CreateUserController().handle);

userRouter.post("/sign-in", new SignInUserController().handle);

export { userRouter };
