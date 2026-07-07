import { Router } from "../router";
import { Logger } from "../services";

export class App {

    constructor() {

        this.router = new Router();

    }

    init() {

        Logger.info("Application started.");

        this.router.register("/", () => {
            Logger.info("Home");
        });

        this.router.navigate("/");

    }

}