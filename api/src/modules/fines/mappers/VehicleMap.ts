import { veiculos } from "@prisma/client";

import { IGetOneVehicleDto } from "../dtos";

class VehicleMap {
  static toRepository({ license_plate, chassis, renavam }: IGetOneVehicleDto) {
    const vehicle = {
      placa: license_plate,
      chassi: chassis,
      renavam,
    };

    return vehicle;
  }

  static toHTTP({ id, chassi, estado, modelo, placa, renavam }: veiculos) {
    const vehicle = {
      id,
      chassis: chassi,
      state: estado,
      model: modelo,
      license_plate: placa,
      renavam,
    };

    return vehicle;
  }
}

export { VehicleMap };
