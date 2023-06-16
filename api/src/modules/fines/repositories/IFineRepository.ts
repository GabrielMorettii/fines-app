import { IFineDto } from "../dtos/IFineDto";
import { IGetOneFineProps } from "../dtos/IGetOneFineProps";

interface IFineRepository {
  findAll(data: IGetOneFineProps): Promise<IFineDto[]>;
}

export { IFineRepository };
