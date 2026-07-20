class InfiniteScroll {

    constructor(sentinel, onLoadMore){

        this.sentinel = sentinel;

        this.onLoadMore = onLoadMore;

        this.observer = new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting) this.onLoadMore();

            });

        });

        this.observer.observe(this.sentinel);

    }

    disconnect(){

        this.observer.disconnect();

    }

}

export default InfiniteScroll;
