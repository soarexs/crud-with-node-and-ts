import { Router } from "express";
import { createUserController } from "../useCases/crud/CreateUser";
import { listUsersController } from "../useCases/crud/ListUsers";

const router = Router()

router.post('/create', (req, res) => {
    createUserController.handle(req, res)
})
router.get('/list', (req, res) => {
    listUsersController.handle(req, res)
})
router.get('/find/:id')
router.delete('/delete')
router.delete('/delete/:id')
router.patch('/update/:id')

export { router }