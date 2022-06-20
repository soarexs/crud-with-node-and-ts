import { User } from "../../../entities/User.entities";

export interface IListUsersRespository {
    list(): Promise<User[]>
}