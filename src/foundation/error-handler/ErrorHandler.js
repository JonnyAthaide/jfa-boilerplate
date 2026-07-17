import { Logger } from "../services";

export class ErrorHandler {

    static handle(error) {

        Logger.error(error);

    }

    static async execute(callback) {

        try {

            return await callback();

        } catch (error) {

            this.handle(error);

            return null;

        }

    }

}