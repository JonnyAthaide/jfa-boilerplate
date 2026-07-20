class Breadcrumb {

    constructor(element){

        this.element = element;

    }

    setItems(items){

        this.element.innerHTML = "";

        items.forEach((item, index) => {

            const isLast = index === items.length - 1;

            const li = document.createElement("li");

            li.className = isLast ? "breadcrumb-item active" : "breadcrumb-item";

            if(isLast){

                li.textContent = item.label;

                li.setAttribute("aria-current", "page");

            } else {

                const link = document.createElement("a");

                link.href = item.href;

                link.textContent = item.label;

                li.appendChild(link);

            }

            this.element.appendChild(li);

        });

    }

}

export default Breadcrumb;
