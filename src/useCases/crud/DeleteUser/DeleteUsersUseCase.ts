import { IDeleteUserRepository } from "../../../repositories/User/repository/IDeleteUser.repository";

export class DeleteUsersUseCase {
    constructor(
        private deleteUserRepository: IDeleteUserRepository
    ) { }

    async execute() {
        await this.deleteUserRepository.delete()
    }
}