import { CreateUserController } from "@modules/users/controllers/CreateUserController";
import { SignInUserController } from "@modules/users/controllers/SignInUserController";
import { Router } from "express";

const userRouter = Router();

userRouter.post("/", new CreateUserController().handle);

userRouter.post("/sign-in", new SignInUserController().handle);

export { userRouter };
