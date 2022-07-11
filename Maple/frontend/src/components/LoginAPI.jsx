export default class LoginAPI {
    static signup = (username, email, password) => {
        return fetch("http://localhost:5000/flask/signup", {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        }).then(response => response.json()).catch(
            error => console.log(error)
        )
    }
    static login = (username, email, password) => {
        return fetch("http://localhost:5000/flask/login", {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        }).then(response => response.json()).catch(
            error => console.log(error)
        )
    }
    static delete = (username, email, password) => {
        return fetch("http://localhost:5000/flask/delete", {
            method:'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            })
        }).then(response => response.json()).catch(
            error => console.log(error)
        )
    }
    static info = (token) => {
        fetch("http://localhost:5000/flask/login", {
            method:'GET',
            headers: {
                Authorization: "Bearer " + token
            },
        }).then(response => response.json()).catch(
            error => console.log(error)
        )
    }
};
