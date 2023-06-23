import { PrismaClient } from "@prisma/client";
import { IGetOneVehicleDto } from "@modules/fines/dtos";
import { VehicleMap } from "@modules/fines/mappers/VehicleMap";
import { IVehiclesRepository } from "@modules/fines/repositories";
import { prisma } from "@shared/infra/prisma/client";

export class VehiclesRepository implements IVehiclesRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = prisma;
  }

  async findOne(data: IGetOneVehicleDto) {
    const vehicle = await this.prisma.veiculos.findFirst({
      where: VehicleMap.toRepository(data)
    }) 

    if(!vehicle) return null;

    return VehicleMap.toHTTP(vehicle);
  }
}
