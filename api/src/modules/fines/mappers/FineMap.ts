import { IFineDto } from "../dtos";
import { IGetOneFineDto } from "../dtos/IGetOneFineDto";
import { IMulta } from "../dtos/IMulta";

class FineMap {
  static toRepository({ license_plate }: IGetOneFineDto) {
    const fine = {
      placa_veiculo: license_plate,
    };

    return fine;
  }

  static toHTTP(data: IMulta) {
    const fine: IFineDto = {
      id: data.id,
      license_plate: data.placa_veiculo!,
      description: data.descricao,
      value: +data.valor,
      infraction_date: data.data_infracao,
      state: data.estado,
      service: data.servico,
      chassis: data.veiculo?.chassi
    };

    return fine;
  }

  static toHTTPs(data: IMulta[]) {
    return data.map(FineMap.toHTTP);
  }
}

export { FineMap };
