import { Modal as BootstrapModal } from "bootstrap";

class Modal {

    constructor(element){

        this.element = element;

        this.instance = BootstrapModal.getOrCreateInstance(element);

    }

    open(){

        this.instance.show();

    }

    close(){

        this.instance.hide();

    }

    toggle(){

        this.instance.toggle();

    }

}

export default Modal;
