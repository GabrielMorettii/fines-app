import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import AppError from "@shared/errors/AppError";

import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUserRepository
  ){}

  async execute(data: ICreateUserDto) {
    this.validate(data);

    const existentUser = await this.usersRepository.findByUsername(data.username);

    if (existentUser) {
      throw new AppError("Usuário já existe");
    }

    const hashedPassword = await hash(data.password, 8);

    const user = await this.usersRepository.create({
      username: data.username,
      password: hashedPassword,
    })

    return user;
  }

  validate(data: ICreateUserDto){
    const { username, password } = data;

    if (!username || !password) {
      throw new AppError("Usuário ou senha inválido");
    }
  }
}

export { CreateUserUseCase };
