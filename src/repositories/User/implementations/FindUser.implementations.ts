import { UsersDB } from "../../../database/users.db";
import { User } from "../../../entities/User.entities";
import { IFindUserRepository } from "../repository/IFindUser.repository";

export class FindUserImplementations implements IFindUserRepository {
    constructor(
        private usersDB: UsersDB
    ) { }

    async find(id: string): Promise<User> {
        const user: any = await this.usersDB.find(undefined, id)
        return user
    }
}