import { Alert as BootstrapAlert } from "bootstrap";

class Alert {

    constructor(element){

        this.element = element;

        this.instance = BootstrapAlert.getOrCreateInstance(element);

    }

    close(){

        this.instance.close();

    }

}

export default Alert;
