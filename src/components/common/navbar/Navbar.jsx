import React from 'react';
import Login from '../Login';
import Service from '../service';
import Sign from '../Sign';
import './Navbar.css';

function Navbar () {
    return (
        <section className="navbar">
        <a href="/" className="navbar-item">서비스</a>
        <a href="/sign-up" className="navbar-item">회원가입</a>
        <a href="/login" className="navbar-item">로그인</a>
    </section>
    )
}

export default Navbar;