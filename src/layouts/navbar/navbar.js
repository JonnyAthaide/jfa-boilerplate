import { Collapse } from "bootstrap";

class Navbar {

    constructor(element){

        this.element = element;

        const collapseElement = element.querySelector(".navbar-collapse");

        this.collapse = collapseElement
            ? Collapse.getOrCreateInstance(collapseElement, { toggle: false })
            : null;

    }

    open(){

        this.collapse?.show();

    }

    close(){

        this.collapse?.hide();

    }

    toggle(){

        this.collapse?.toggle();

    }

}

export default Navbar;
