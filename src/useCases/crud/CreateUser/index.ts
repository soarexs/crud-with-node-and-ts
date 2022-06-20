import { CreateUserController } from '../../../controllers/CreateUser.controller'
import { UsersDB } from '../../../database/users.db'
import { CreateUserImplementations } from '../../../repositories/User/implementations/CreateUser.implementations'
import { CreateUserUseCase } from './CreateUserUseCase'


const usersDB = new UsersDB()
const createUserRespository = new CreateUserImplementations(usersDB)
const createUserUseCase = new CreateUserUseCase(createUserRespository)
const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }