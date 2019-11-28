import React from 'react';
import './style.css';

function Hero(props) {
    return (
        //why does {...props} spread children not work here?
        <div className="hero text-center">
            {props.children}
        </div >
    );
}

export default Hero;