import { UsersDB } from "../../../database/users.db";
import { IDeleteUserRepository } from "../repository/IDeleteUser.repository";

export class DeleteUsersImplementations implements IDeleteUserRepository {
    constructor(
        private usersDB: UsersDB
    ) { }
    async delete(): Promise<void> {
        await this.usersDB.delete()
    }
}