class Badge {

    constructor(element){

        this.element = element;

    }

    setText(text){

        this.element.textContent = text;

    }

    setVariant(variant){

        this.element.className = this.element.className.replace(/text-bg-\S+/, "");

        this.element.classList.add(`text-bg-${variant}`);

    }

}

export default Badge;
