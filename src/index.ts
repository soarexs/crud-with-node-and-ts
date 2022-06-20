import { App } from "./app"

const main = async () => {
    const app = new App()
    app.listen(3000, 'server is running!')
}

main()