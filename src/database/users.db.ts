import { User } from "../entities/User.entities";
import { IUpdateUserDTO } from "../repositories/User/DTOs/UpdateUser.DTO";

export class UsersDB {
    public users: User[] = []


    async save(data: User) {
        this.users.push(data)
    }

    async find(email?: string, id?: string) {
        if (email?.length) {
            const user = this.users.find(user => user.email === email)
            return user
        } else {
            const user = this.users.find(user => user.id === id)
            return user
        }
    }

    async list() {
        return this.users
    }

    async updateUser(id: string, data: IUpdateUserDTO) {
        const user: any = await this.find(undefined, id)
        const i = this.users.indexOf(user)
        const userUpdated = this.users[i] = {
            id: this.users[i].id,
            name: data.name,
            email: this.users[i].email,
            password: data.password
        }

        return userUpdated
    }

    async delete() {
        this.users = []
    }

    async deleteOne(id: string) {
        const user: any = await this.find(undefined, id)
        const i = this.users.indexOf(user)
        this.users.splice(i, 1)
    }
}