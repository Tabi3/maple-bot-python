export default class WolframAPI {
    static send_query(query) {
        return (async () => await fetch("http://localhost:5000/flask/wolfram_query", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query),
        }).then(response => response.json()).catch(
            error => console.log(error)
        ))()
    }
};
