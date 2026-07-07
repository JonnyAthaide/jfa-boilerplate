import { Config } from "../config";

export class App {

    constructor() {
        this.config = Config;
    }

    init() {

        console.group(this.config.appName);

        console.info("JFA Foundation iniciada.");

        console.table(this.config);

        console.groupEnd();

    }

}