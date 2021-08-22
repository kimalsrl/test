import React from 'react';
import './Sign.css';

function Sign () {
    return (
    <section className="sign">
        <div id ="bigbox">
            <input type="email" name="email" id="box" placeholder="e-mail"></input>
        </div>
        <div id ="bigbox2">
            <input type="password" name="pw" id="box" placeholder="Password"></input>
        </div>
        <div id ="bigbox2">
            <input type="password" name="pwcheck" id="box" placeholder="Password"></input>
        </div>
        <div id ="bigbox2">
            <input type="number" name="phone" id="box2" placeholder="number"></input>
        </div>
        <div id ="button">
        <button id="signbutton">가입하기</button>
        </div>
    </section>
    )
}

export default Sign;