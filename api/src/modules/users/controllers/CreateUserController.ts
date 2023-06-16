import { container } from "tsyringe";
import { Request, Response } from "express";

import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { CreateUserUseCase } from "../useCases/CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body as ICreateUserDto;

    const createUserUseCase = container.resolve(CreateUserUseCase)

    const user = await createUserUseCase.execute({
      username,
      password,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
