class FormValidation {

    constructor(form){

        this.form = form;

        this.form.addEventListener("submit", (event) => this.handleSubmit(event));

    }

    handleSubmit(event){

        if(!this.form.checkValidity()){

            event.preventDefault();

            event.stopPropagation();

        }

        this.form.classList.add("was-validated");

    }

    reset(){

        this.form.classList.remove("was-validated");

        this.form.reset();

    }

}

export default FormValidation;
