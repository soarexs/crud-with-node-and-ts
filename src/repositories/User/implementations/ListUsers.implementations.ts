import { UsersDB } from "../../../database/users.db";
import { User } from "../../../entities/User.entities";
import { IListUsersRespository } from "../repository/IListUsers.repository";

export class ListUsersImplementations implements IListUsersRespository {
    constructor(
        private usersDB: UsersDB
    ) { }

    async list(): Promise<User[]> {
        const response = await this.usersDB.list()
        return response
    }
}