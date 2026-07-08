import { Config } from "../config";
import { Logger } from "../services";
import { Router } from "../router";
import { EventBus } from "../events";
import { Http } from "../http";
import { PluginManager } from "../plugin-manager";
import { ErrorHandler } from "../error-handler";
import { Lifecycle } from "../lifecycle";

export class App {

    constructor() {

        this.config = Config;
        this.router = new Router();
        this.events = new EventBus();
        this.plugins = new PluginManager();
        this.lifecycle = new Lifecycle();
    }

    async init() {

        Logger.info("JFA Foundation iniciada.");

        this.lifecycle.beforeStart(() => {

            Logger.info("Lifecycle beforeStart");

        });

        this.lifecycle.afterStart(() => {

            Logger.info("Lifecycle afterStart");

        });

        this.events.on("app:init", () => {

            Logger.info("Evento app:init recebido.");

        });

        this.router.register("/", () => {

            Logger.info("Home");

        });

        this.plugins.register("jquery", window.jQuery);

        await this.lifecycle.start();

        this.events.emit("app:init");

        this.router.navigate("/");

        ErrorHandler.execute(() => {

            Logger.info("ErrorHandler iniciado.");

        });

    }

}