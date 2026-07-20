class Breadcrumb {

    constructor(element){

        this.element = element;

    }

    setItems(items){

        this.element.innerHTML = items.map((item, index) => {

            const isLast = index === items.length - 1;

            if(isLast){

                return `<li class="breadcrumb-item active" aria-current="page">${item.label}</li>`;

            }

            return `<li class="breadcrumb-item"><a href="${item.href}">${item.label}</a></li>`;

        }).join("");

    }

}

export default Breadcrumb;
