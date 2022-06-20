import { UsersDB } from "../../../database/users.db";
import { User } from "../../../entities/User.entities";
import { IUpdateUserRepository } from "../repository/IUpdateUser.repository";
import { IUpdateUserDTO } from "../DTOs/UpdateUser.DTO";

export class UpdateUserImplementations implements IUpdateUserRepository {
    constructor(
        private usersDB: UsersDB
    ) { }
    async updateUser(id: string, data: IUpdateUserDTO): Promise<User> {
        const response = await this.usersDB.updateUser(id, data)
        return response
    }
}