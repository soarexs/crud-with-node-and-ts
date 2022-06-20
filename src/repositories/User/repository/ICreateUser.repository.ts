import { User } from "../../../entities/User.entities";
import { CreateUserDTO } from "../../../useCases/crud/CreateUser/CreateUser.DTO";


export interface ICreateUserRespository {
    findByEmail(email: string): Promise<User>,
    save(data: CreateUserDTO): Promise<void>
}