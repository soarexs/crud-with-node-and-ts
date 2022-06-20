import { IListUsersRespository } from "../../../repositories/User/repository/IListUsers.repository";

export class ListUsersUseCase {
    constructor(
        private listUsersRespository: IListUsersRespository
    ) { }

    async execute() {
        const users = await this.listUsersRespository.list()
        return users
    }
}