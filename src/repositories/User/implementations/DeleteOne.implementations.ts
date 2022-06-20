import { UsersDB } from "../../../database/users.db";
import { IDeleteOneRepository } from "../repository/IDeleteOne.repository";

export class DeleteOneImplementations implements IDeleteOneRepository {
    constructor(
        private usersDB: UsersDB
    ) { }

    async deleteOne(id: string): Promise<void> {
        await this.usersDB.deleteOne(id)
    }
}