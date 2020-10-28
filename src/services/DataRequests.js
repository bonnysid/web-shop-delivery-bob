export default class DataRequests {
    static async getData(url) {
        const data = await fetch(url);
        if (!data.ok) {
            throw new Error(`Could not fetch ${url}, status: ${data.status}`);
        }
        return await data.json();
    }

    static async postData(url, data) {
        const response = await fetch(url, {
            method : 'POST',
            headers: {
                'Content-type' : 'application/json; charset=UTF-8'
            },
            body : JSON.stringify(data)
        })

        if (!response.ok) throw new Error(`Something is wrong, status: ${response.status}, err: ${response.statusText};`);
        else return await response.json();
    }

}