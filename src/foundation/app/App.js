import { Config } from "../config";
import { Logger } from "../services";
import { Router } from "../router";
import { EventBus } from "../events";
import { Http } from "../http";

export class App {

    constructor() {

        this.config = Config;
        this.router = new Router();
        this.events = new EventBus();
    }

    init() {

        Logger.info("JFA Foundation iniciada.");

        this.events.on("app:init", () => {

            Logger.info("Evento app:init recebido.");

        });

        this.events.emit("app:init");

        this.router.register("/", () => {

            Logger.info("Home");

        });

        this.router.navigate("/");

    }

}