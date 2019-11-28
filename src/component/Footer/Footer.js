import React from 'react';
import logo from './logo.svg';
import './style.css';

function Footer() {
    return (
        <footer className="footer">
            <span className="text-center">Clicky React App!<img src={logo} className="App-logo" alt="logo" /></span>
        </footer>
    );
}

export default Footer;