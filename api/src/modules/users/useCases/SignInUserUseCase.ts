import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";
import env from '@shared/config/enviroment'

import { ISignInUserDto } from "@modules/users/dtos";
import { IUserRepository } from "@modules/users/repositories";
import { IHashProvider, ITokenProvider } from "@shared/container/providers";

@injectable()
class SignInUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider,
    @inject("TokenProvider")
    private tokenProvider: ITokenProvider
  ){}

  async execute(data: ISignInUserDto) {
    const existentUser = await this.usersRepository.findByUsername(data.username);

    if (!existentUser) {
      throw new AppError("Usuário ou senha inválido", 401);
    }

    const isValid = await this.hashProvider.compare(data.password, existentUser.senha!);

    if (!isValid) {
      throw new AppError("Usuário ou senha inválido", 401);
    }

    const token = this.tokenProvider.sign({}, env.JWT_SECRET, {
      subject: String(existentUser.id),
      expiresIn: env.JWT_EXPIRES_IN,
    })

    return token;
  }
}

export { SignInUserUseCase };
