import { IDeleteOneRepository } from "../../../repositories/User/repository/IDeleteOne.repository"

export class DeleteOneUseCase {
    constructor(
        private deleteOneRepository: IDeleteOneRepository
    ) { }

    async execute(id: string) {
        await this.deleteOneRepository.deleteOne(id)
    }
}