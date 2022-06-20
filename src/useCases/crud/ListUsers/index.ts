import { ListUsersController } from "../../../controllers/ListUsers.controller";
import { UsersDB } from "../../../database/users.db";
import { ListUsersImplementations } from "../../../repositories/User/implementations/ListUsers.implementations";
import { ListUsersUseCase } from "./ListUsersUseCase";

const usersDB = new UsersDB()

const iListUsersRespository = new ListUsersImplementations(usersDB)

const listUsersUseCase = new ListUsersUseCase(iListUsersRespository)

const listUsersController = new ListUsersController(listUsersUseCase)

export { listUsersController }