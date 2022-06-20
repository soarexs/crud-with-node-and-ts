import { IFindUserRepository } from "../../../repositories/User/repository/IFindUser.repository"

export class FindUserUseCase {
    constructor(
        private findUserRepository: IFindUserRepository
    ) { }

    async execute(id: string) {
        const user = await this.findUserRepository.find(id)
        return user
    }
}