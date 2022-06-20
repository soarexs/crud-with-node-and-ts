import { User } from "../../../entities/User.entities";

export interface IFindUserRepository {
    find(id: string): Promise<User>
}