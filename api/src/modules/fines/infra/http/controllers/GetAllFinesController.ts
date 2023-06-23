import { container } from "tsyringe";
import { Request, Response } from "express";

import { IGetOneFineDto } from "@modules/fines/dtos";
import { GetAllFineUseCase } from "@modules/fines/useCases/GetAllFineUseCase";

class GetAllFinesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { service, license_plate, chassis, renavam, state } =
      request.query as unknown as IGetOneFineDto;

    const getAllFinesUseCase = container.resolve(GetAllFineUseCase);

    const fines = await getAllFinesUseCase.execute({
      service,
      state,
      license_plate,
      chassis,
      renavam,
    });

    return response.status(200).json(fines);
  }
}

export { GetAllFinesController };
