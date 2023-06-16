import { ICreateUserDto } from "../dtos/ICreateUserDto";
import { IUserDto } from "../dtos/IUserDto";

class UserMap {
  static toRepository({ username, password }: ICreateUserDto) {
    const user = {
      username,
      senha: password,
    };

    return user;
  }

  static toHTTP({ id, username }: IUserDto) {
    const user = {
      id,
      username,
    };

    return user;
  }
}

export { UserMap };
