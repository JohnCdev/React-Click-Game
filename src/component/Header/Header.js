import React from 'react';
import './style.css';

function Header(props) {


    return (
        <ul className="nav fixed-top">
            <li className="align-middle">
                <a href="/">Clicker Game</a>
            </li>
            <li className="align-middle">
                {/* Need to make this have 3 states, start, win, lost. Maybe seperate component?*/}
                {props.lost ? "true" : "false"}
            </li>
            <li className="align-middle">
                {`Current Score: ${props.currentScore} | High Score: ${props.highScore}`}
            </li>
        </ul>
    );
}

export default Header;