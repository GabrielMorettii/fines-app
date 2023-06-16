import { multas, veiculos } from "@prisma/client";

export interface IMulta extends multas {
  veiculo?: veiculos
}