class LazyLoading {

    constructor(elements){

        this.elements = elements;

        this.observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting){

                    this.load(entry.target);

                    this.observer.unobserve(entry.target);

                }

            });

        });

        this.elements.forEach((element) => this.observer.observe(element));

    }

    load(element){

        const source = element.dataset.src;

        if(source) element.src = source;

        element.removeAttribute("data-src");

    }

}

export default LazyLoading;
