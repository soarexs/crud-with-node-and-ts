import { ListUsersUseCase } from "../useCases/crud/ListUsers/ListUsersUseCase";
import { Request, Response } from "express";

export class ListUsersController {
    constructor(
        private listUsersUseCase: ListUsersUseCase
    ) { }
    async handle(req: Request, res: Response) {
        try {
            const response = await this.listUsersUseCase.execute()
            res.status(200).json(response)
        } catch (error) {
            throw res.status(400).json(error || { error: 'something went wrong' })
        }
    }
}