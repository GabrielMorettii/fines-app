import { Prisma } from "@prisma/client";

export interface IGetOneFineProps {
  where: Prisma.multasWhereInput;
  select?: Prisma.multasSelect;
  include?: Prisma.multasInclude;
}