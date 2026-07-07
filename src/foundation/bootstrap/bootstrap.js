import { App } from "../app";

export function bootstrap() {
    const app = new App();

    app.init();

    return app;
}