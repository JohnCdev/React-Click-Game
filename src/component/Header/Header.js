import React from 'react';
import './style.css';

function Header(props) {



    return (
        <ul className="nav fixed-top">
            <li className="align-middle">
                <a href="/">Hollow Knight Clicker Game</a>
            </li>
            <li className={`align-middle message ${props.lost ? "wrong" : "right"}`}>
                {/* dosent work */}
                {/* Animation dosent work quite right */}
                {console.log(props.chooseMessage)}
                {props.lost ? "You picked Wrong!" : "You picked correctly!"}
            </li>
            <li className="align-middle">
                {`Current Score: ${props.currentScore} | High Score: ${props.highScore}`}
            </li>
        </ul>
    );
}

export default Header;