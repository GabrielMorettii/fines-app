import { ICreateUserDto } from "../dtos/ICreateUserDto"
import { IUserDto } from "../dtos/IUserDto"

interface IUserRepository{
  create(data: ICreateUserDto): Promise<IUserDto>
  findByUsername(username: string): Promise<IUserDto>
}

export {IUserRepository}
