import { FindUserUseCase } from "../useCases/crud/FindUser/FIndUserUseCase";
import { Request, Response } from "express";

export class FindUserController {

    constructor(
        private findUserUseCase: FindUserUseCase
    ) { }
    async handle(req: Request, res: Response) {
        const { id } = req.params

        try {
            const response = await this.findUserUseCase.execute(id)
            res.status(201).json({ user: response })
        } catch (error) {
            res.status(400).json(error || { error: 'something went wrong' })
        }
    }
}