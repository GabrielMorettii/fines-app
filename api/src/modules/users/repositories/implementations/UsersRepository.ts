import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../IUserRepository";
import { IUserDto } from "../../dtos/IUserDto";
import { ICreateUserDto } from "../../dtos/ICreateUserDto";
import { UserMap } from "../../mappers/UserMap";
import { prisma } from "@libs/prisma";

export class UsersRepository implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async create(data: ICreateUserDto): Promise<IUserDto> {
    const user = await this.prisma.usuarios.create({
      data: UserMap.toRepository(data),
    });

    return UserMap.toHTTP(user);
  }

  async findByUsername(username: string): Promise<IUserDto> {
    return await this.prisma.usuarios.findFirst({
      where: {
        username,
      },
    }) as IUserDto;
  }
}
