import { ICreateUserRespository } from "../../../repositories/User/repository/ICreateUser.repository";
import { CreateUserDTO } from "./CreateUser.DTO";

export class CreateUserUseCase {
    constructor(
        private createUserRepository: ICreateUserRespository
    ) { }

    async execute(data: CreateUserDTO) {
        const userFound = await this.createUserRepository.findByEmail(data.email)
        if (userFound) {
            return 'User already exists'
        }

        await this.createUserRepository.save(data)
        return data
    }
}