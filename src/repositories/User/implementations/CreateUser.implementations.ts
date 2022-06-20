import { UsersDB } from "../../../database/users.db";
import { User } from "../../../entities/User.entities";
import { ICreateUserRespository } from "../repository/ICreateUser.repository";

export class CreateUserImplementations implements ICreateUserRespository {
    constructor(
        private usersDB: UsersDB
    ) { }

    async findByEmail(email: string): Promise<User> {
        const user: any = await this.usersDB.find(email)
        return user
    }

    async save(data: User): Promise<void> {
        await this.usersDB.save(data)
    }
}