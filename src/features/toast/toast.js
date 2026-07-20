import { Toast as BootstrapToast } from "bootstrap";

class ToastSystem {

    constructor(container){

        this.container = container;

    }

    show(message, { variant = "primary", delay = 5000 } = {}){

        const toast = document.createElement("div");

        toast.className = `toast align-items-center text-bg-${variant} border-0`;
        toast.setAttribute("role", "alert");
        toast.setAttribute("aria-live", "assertive");
        toast.setAttribute("aria-atomic", "true");

        const flex = document.createElement("div");

        flex.className = "d-flex";

        const body = document.createElement("div");

        body.className = "toast-body";
        body.textContent = message;

        const closeButton = document.createElement("button");

        closeButton.type = "button";
        closeButton.className = "btn-close me-2 m-auto";
        closeButton.setAttribute("data-bs-dismiss", "toast");
        closeButton.setAttribute("aria-label", "Close");

        flex.appendChild(body);
        flex.appendChild(closeButton);
        toast.appendChild(flex);

        this.container.appendChild(toast);

        const instance = BootstrapToast.getOrCreateInstance(toast, { delay });

        toast.addEventListener("hidden.bs.toast", () => toast.remove());

        instance.show();

        return instance;

    }

}

export default ToastSystem;
