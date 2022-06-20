import express, { Application } from "express";
import { router as routerUsers } from "./routes/user.router";

export class App {
    private app: Application
    constructor() {
        this.app = express()
        this.middlewares()
        this.routes()
    }
    routes() {
        this.app.use(routerUsers)
    }
    middlewares() {
        this.app.use(express.json())
    }

    listen(PORT: number, message: string) {
        this.app.listen(PORT, () => console.log(message))
    }
}