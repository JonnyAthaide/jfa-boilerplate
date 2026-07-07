export class Dom {

    static query(selector) {
        return document.querySelector(selector);
    }

    static queryAll(selector) {
        return document.querySelectorAll(selector);
    }

    static create(tag) {
        return document.createElement(tag);
    }

    static remove(element) {
        element?.remove();
    }

    static html(element, html) {
        element.innerHTML = html;
    }

}