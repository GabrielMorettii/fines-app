import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";

import { IUserRepository } from "@modules/users/repositories";
import { ICreateUserDto } from "@modules/users/dtos";
import { User } from "@modules/users/entities/User";
import { IHashProvider } from "@modules/users/providers/HashProvider/IHashProvider";
@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("HashProvider")
    private hashProvider: IHashProvider
  ) {}

  async execute(data: ICreateUserDto) {
    this.validate(data);

    const existentUser = await this.usersRepository.findByUsername(
      data.username
    );

    if (existentUser) {
      throw new AppError("Usuário já existe");
    }

    const hashedPassword = await this.hashProvider.hash(data.password, 8);

    const userEntity = new User({
      username: data.username,
      password: hashedPassword,
    });

    const user = await this.usersRepository.create(userEntity);

    return user;
  }

  validate(data: ICreateUserDto) {
    const { username, password } = data;

    if (!username || !password) {
      throw new AppError("Usuário ou senha inválido");
    }
  }
}

export { CreateUserUseCase };
