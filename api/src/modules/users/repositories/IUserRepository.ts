import { IUserDto, ICreateUserDto } from "../dtos"
interface IUserRepository{
  create(data: ICreateUserDto): Promise<IUserDto>
  findByUsername(username: string): Promise<IUserDto | null>
}

export {IUserRepository}
