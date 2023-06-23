import { PrismaClient } from "@prisma/client";
import { IFineDto } from "@modules/fines/dtos/IFineDto";
import { FineMap } from "@modules/fines/mappers/FineMap";
import { IGetOneFineProps } from "@modules/fines/dtos/IGetOneFineProps";
import { IFineRepository } from "@modules/fines/repositories";
import { prisma } from "@shared/infra/prisma/client";

export class FinesRepository implements IFineRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async findAll(data: IGetOneFineProps): Promise<IFineDto[]> {
    const fines = await this.prisma.multas.findMany({
      where: data,
      include: {
        veiculo: {
          select: {
            chassi: true,
          },
        },
      }
    });

    return FineMap.toHTTPs(fines);
  }
}
