import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { ISignInUserDto } from "../dtos/ISignInUserDto";
import { IUserRepository } from "../repositories/IUserRepository";

import AppError from "@shared/errors/AppError";

@injectable()
class SignInUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ){}

  async execute(data: ISignInUserDto) {
    const existentUser = await this.usersRepository.findByUsername(data.username);

    if (!existentUser) {
      throw new AppError("Usuário ou senha inválido", 401);
    }

    const isValid = await compare(data.password, existentUser.senha!);

    if (!isValid) {
      throw new AppError("Usuário ou senha inválido", 401);
    }

    const token = sign({}, process.env.JWT_SECRET!, {
      subject: String(existentUser.id),
      expiresIn: "1d",
    });

    return token;
  }
}

export { SignInUserUseCase };
