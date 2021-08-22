import React from 'react';
import './Service.css';

function Service () {
    return (
    <section className="sevice">
        {/* <img src="src\components\common\service\unnamed.jpg" alt="item"></img> */}
        <div id="photo">
            <a>사진</a>
        </div>
        <div>
        <button id="order" onClick={function() {alert('주문성공!')}}>주문하기</button>
        </div>
    </section>
    )
}

export default Service;