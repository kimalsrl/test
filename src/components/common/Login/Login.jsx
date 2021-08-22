import React from 'react';
import './Login.css';

function Login () {
    return (
    <section className="login">
        <div id ="bigbox">
            <input type="email" name="" id="box" placeholder="e-mail"></input>
        </div>
        <div id ="bigbox2">
            <input type="password" name="" id="box" placeholder="Password"></input>
        </div>
        <div id ="button">
        <button id="loginbutton">로그인</button>
        </div>
    </section>
    )
}

export default Login;