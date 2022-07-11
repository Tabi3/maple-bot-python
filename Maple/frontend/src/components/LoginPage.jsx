import React, { useState, useEffect } from 'react'
import LoginAPI from './LoginAPI'

let myStyle = {
    "--title": '"Login Page"',
}

const Login = (props) => {
    
    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    
    let handleSubmit = (event) => {
        event.preventDefault()
        LoginAPI.login(username, email, password).then(
            x => renderStatus(x)
        )
    }
    let handleEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }
    let handleUsername = (event) => {
        event.preventDefault()
        setUsername(event.target.value)
    }
    let handlePassword = (event) => {
        event.preventDefault()
        setPassword(event.target.value)
    }
    let renderStatus = (x) => {
        if (x === undefined) return;
        console.log(x)
        localStorage.setItem("MapleToken", x["access_token"])
        localStorage.setItem("TokenExpire", x["expires_on"])
        localStorage.setItem("IsLoggedIn", true)
        window.location.reload();
    }

    return (
        <>
        <div class="main-test" style={myStyle}></div>
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input type="text" name='username' defaultValue={username} onChange={handleUsername}/>
                </label>
                <label>
                    Password: <input type="password" name='password' defaultValue={password} onChange={handlePassword}/>
                </label>
                <label>
                    Email: <input type="text" name='email' defaultValue={email} onChange={handleEmail}/>
                </label>
                <input type='submit'/>
            </form>
            <div>
                {renderStatus()}
            </div>
        </div>
        </>
    )
}

export default Login