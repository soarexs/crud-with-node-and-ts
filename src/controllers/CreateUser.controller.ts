import { CreateUserUseCase } from "../useCases/crud/CreateUser/CreateUserUseCase";
import { Request, Response } from "express";

export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    async handle(req: Request, res: Response) {
        try {
            const response = await this.createUserUseCase.execute(req.body)
            return res.status(201).json({ message: response })
        } catch (error) {
            throw res.status(400).json(error || { error: 'something went wrong' })
        }
    }
}