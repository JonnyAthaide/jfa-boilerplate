class Button {

    constructor(element){

        this.element = element;

    }

    setLoading(isLoading){

        this.element.classList.toggle("is-loading", isLoading);

        this.element.toggleAttribute("disabled", isLoading);

        this.element.setAttribute("aria-busy", isLoading);

    }

    setDisabled(isDisabled){

        this.element.toggleAttribute("disabled", isDisabled);

    }

    onClick(handler){

        this.element.addEventListener("click", handler);

    }

}

export default Button;