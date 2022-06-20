import { IUpdateUserRepository } from "../../../repositories/User/repository/IUpdateUser.repository";
import { UpdateUserDTO } from "./UpdateUser.DTO";

export class UpdateUserUseCase {
    constructor(
        private updateUserRepository: IUpdateUserRepository
    ) { }

    async execute(id: string, data: UpdateUserDTO) {
        await this.updateUserRepository.updateUser(id, {
            name: data.name,
            password: data.password
        })
    }
}