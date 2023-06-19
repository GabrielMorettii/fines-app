import { container } from "tsyringe";

import { IUserRepository, UsersRepository } from "@modules/users/repositories";
import { IFineRepository, FinesRepository } from "@modules/fines/repositories";

import './providers';

container.registerSingleton<IFineRepository>(
  "FinesRepository",
  FinesRepository
);
container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);
