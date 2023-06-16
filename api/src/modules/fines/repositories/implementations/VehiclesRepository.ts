import { PrismaClient } from "@prisma/client";
import { prisma } from "@libs/prisma";
import { IVehiclesRepository } from "../IVehiclesRepository";
import { IGetOneVehicleDto, IVehicleDto } from "@modules/fines/dtos";
import { VehicleMap } from "@modules/fines/mappers/VehicleMap";

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
