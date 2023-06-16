import { IVehicleDto, IGetOneVehicleDto } from "../dtos";

interface IVehiclesRepository {
  findOne(data: IGetOneVehicleDto): Promise<IVehicleDto | null>;
}

export { IVehiclesRepository };
