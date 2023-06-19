import { usuarios } from "@prisma/client";

import { ICreateUserDto } from "../dtos";

class UserMap {
  static toRepository({
    username,
    password,
  }: ICreateUserDto): Omit<usuarios, "id"> {
    const user = {
      username,
      senha: password,
    };

    return user;
  }

  static toHTTP({ id, username }: usuarios) {
    const user = {
      id,
      username,
    };

    return user;
  }
}

export { UserMap };
