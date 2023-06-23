import { multas } from "@prisma/client";

export interface IMulta extends multas {
  veiculo?: {
    chassi: string;
  }
}