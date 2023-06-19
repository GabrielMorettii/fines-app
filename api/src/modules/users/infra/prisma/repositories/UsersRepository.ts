import { PrismaClient } from "@prisma/client";
import { prisma } from "@shared/infra/prisma/client";

import { IUserRepository } from "@modules/users/repositories";
import { ICreateUserDto, IUserDto } from "@modules/users/dtos";
import { UserMap } from "@modules/users/mappers/UserMap";

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

  async findByUsername(username: string): Promise<IUserDto | null> {
    const user = await this.prisma.usuarios.findFirst({
      where: {
        username,
      },
    });

    return user;
  }
}
