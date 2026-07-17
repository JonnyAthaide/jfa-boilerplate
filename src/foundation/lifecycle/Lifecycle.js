export class Lifecycle {

    constructor() {

        this.beforeStartCallbacks = [];
        this.afterStartCallbacks = [];

    }

    beforeStart(callback) {

        this.beforeStartCallbacks.push(callback);

    }

    afterStart(callback) {

        this.afterStartCallbacks.push(callback);

    }

    async start() {

        for (const callback of this.beforeStartCallbacks) {
            await callback();
        }

        for (const callback of this.afterStartCallbacks) {
            await callback();
        }

    }

}