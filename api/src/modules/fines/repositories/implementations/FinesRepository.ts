import { PrismaClient } from "@prisma/client";
import { prisma } from "@libs/prisma";
import { IFineRepository  } from "../IFineRepository";
import { IFineDto } from "@modules/fines/dtos/IFineDto";
import { FineMap } from "@modules/fines/mappers/FineMap";
import { IGetOneFineProps } from "@modules/fines/dtos/IGetOneFineProps";

export class FinesRepository implements IFineRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async findAll(data: IGetOneFineProps): Promise<IFineDto[]> {
    const fines = await this.prisma.multas.findMany(data);

    return FineMap.toHTTPs(fines);
  }
}
