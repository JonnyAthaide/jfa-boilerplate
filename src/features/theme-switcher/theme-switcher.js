import { Storage } from "../../foundation";

const STORAGE_KEY = "jfa-theme";

class ThemeSwitcher {

    constructor(root = document.documentElement){

        this.root = root;

    }

    getTheme(){

        return this.root.getAttribute("data-bs-theme") || "light";

    }

    setTheme(theme){

        this.root.setAttribute("data-bs-theme", theme);

        Storage.set(STORAGE_KEY, theme);

    }

    toggle(){

        this.setTheme(this.getTheme() === "dark" ? "light" : "dark");

    }

    init(){

        const stored = Storage.get(STORAGE_KEY);

        const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

        this.setTheme(stored || preferred);

    }

}

export default ThemeSwitcher;
