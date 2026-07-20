class Card {

    constructor(element){

        this.element = element;

    }

    setContent(html){

        const body = this.element.querySelector(".card-body");

        if(body) body.innerHTML = html;

    }

}

export default Card;
