import { container } from "tsyringe";

import { IUserRepository } from "@modules/users/repositories/IUserRepository";
import { IFineRepository } from "@modules/fines/repositories/IFineRepository";

import { UsersRepository } from "@modules/users/repositories/implementations/UsersRepository";
import { FinesRepository } from "@modules/fines/repositories/implementations/FinesRepository";

container.registerSingleton<IFineRepository>('FinesRepository', FinesRepository)
container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository)
