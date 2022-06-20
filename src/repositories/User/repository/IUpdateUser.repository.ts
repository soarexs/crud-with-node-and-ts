import { User } from "../../../entities/User.entities";

export interface IUpdateUserRepository {
    updateUser(id: string, data: object): Promise<User>
}