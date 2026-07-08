export class PluginManager {

    constructor() {

        this.plugins = new Map();

    }

    register(name, plugin) {

        if (this.plugins.has(name)) {
            console.warn(`Plugin "${name}" já está registrado.`);
            return;
        }

        this.plugins.set(name, plugin);

    }

    get(name) {

        return this.plugins.get(name);

    }

    has(name) {

        return this.plugins.has(name);

    }

    remove(name) {

        this.plugins.delete(name);

    }

    clear() {

        this.plugins.clear();

    }

}