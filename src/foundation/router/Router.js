import { Logger } from "../services";
import { Route } from "./Route";

export class Router {

    constructor() {
        this.routes = [];
    }

    register(path, handler) {
        this.routes.push(
            new Route(path, handler)
        );
    }

    navigate(path) {

        const route = this.routes.find(
            route => route.path === path
        );

        if (!route) {
            Logger.warn(`Route "${path}" not found.`);
            return;
        }

        Logger.info(`Navigate -> ${path}`);

        route.handler();

    }

}