import { Request, Response } from "express";
import { container } from "tsyringe";
import { ISignInUserDto } from "@modules/users/dtos";
import { SignInUserUseCase } from "@modules/users/useCases/SignInUserUseCase";

class SignInUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { username, password } = request.body as ISignInUserDto;

    const signInUserUseCase = container.resolve(SignInUserUseCase);

    const token = await signInUserUseCase.execute({
      username,
      password,
    });

    return response.status(200).json({ token });
  }
}

export { SignInUserController };
