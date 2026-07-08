export class Http {

    static async request(url, options = {}) {

        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        return response.json();

    }

    static get(url, options = {}) {

        return this.request(url, {
            method: "GET",
            ...options
        });

    }

    static post(url, body = {}, options = {}) {

        return this.request(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {})
            },
            body: JSON.stringify(body),
            ...options
        });

    }

    static put(url, body = {}, options = {}) {

        return this.request(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {})
            },
            body: JSON.stringify(body),
            ...options
        });

    }

    static delete(url, options = {}) {

        return this.request(url, {
            method: "DELETE",
            ...options
        });

    }

}