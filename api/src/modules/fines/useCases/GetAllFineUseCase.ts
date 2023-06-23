import { inject, injectable } from "tsyringe";

import AppError from "@shared/errors/AppError";
import { IFineRepository } from "@modules/fines/repositories";
import { IGetOneFineDto } from "@modules/fines/dtos";

@injectable()
class GetAllFineUseCase {
  constructor(
    @inject("FinesRepository")
    private finesRepository: IFineRepository
  ) {}

  async execute(data: IGetOneFineDto) {
    this.validate(data);

    const handlers = {
      DETRAN: this.handleDetran.bind(this),
      DNIT: this.handleDnit.bind(this),
      DPRF: this.handleDprf.bind(this),
      all: this.handleAll.bind(this),
    };

    const result = await handlers[data.service as keyof typeof handlers](data);

    return result;
  }

  validate(data: IGetOneFineDto) {
    const { service, license_plate, chassis, renavam } = data;

    if (!license_plate) {
      throw new AppError("Dados inválidos");
    } else if (service === "DNIT" && !renavam) {
      throw new AppError("Dados inválidos");
    } else if (
      (service === "DPRF" || service == "all") &&
      (!chassis || !renavam)
    ) {
      throw new AppError("Dados inválidos");
    }
  }

  handleDetran(data: IGetOneFineDto) {
    return this.finesRepository.findAll({
      placa_veiculo: data.license_plate,
      servico: data.service,
      estado: data.state,
    });
  }

  handleDnit(data: IGetOneFineDto) {
    return this.finesRepository.findAll({
      placa_veiculo: data.license_plate,
      servico: data.service,
      estado: data.state,
      veiculo: {
        renavam: data.renavam,
      },
    });
  }

  handleDprf(data: IGetOneFineDto) {
    return this.finesRepository.findAll({
      placa_veiculo: data.license_plate,
      servico: data.service,
      estado: data.state,
      veiculo: {
        renavam: data.renavam,
        chassi: data.chassis,
      },
    });
  }

  async handleAll(data: IGetOneFineDto) {
    let fines = await this.finesRepository.findAll({
      placa_veiculo: data.license_plate,
      estado: data.state,
      veiculo: {
        renavam: data.renavam,
        chassi: data.chassis,
      },
    });

    ["DETRAN", "DNIT", "DPRF"].forEach((service) => {
      const hasFineAssociated = fines.find((fine) => fine.service === service);

      if (!hasFineAssociated) {
        const randomId = Math.floor(Math.random() * 900) + 100;

        const newEntity = {
          ...data,
          ...fines[0],
          id: randomId,
          service,
          value: 0,
        };

        fines.push(newEntity);
      }
    });

    fines = fines.sort((a, b) => a.service.localeCompare(b.service));

    return fines;
  }
}

export { GetAllFineUseCase };
