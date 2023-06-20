import { container } from "tsyringe";

import { BcrypyHashProvider } from "./implementations/BcryptHashProvider";
import { IHashProvider } from "./IHashProvider";

container.registerSingleton<IHashProvider>('HashProvider', BcrypyHashProvider)

export {
  BcrypyHashProvider,
  IHashProvider
}