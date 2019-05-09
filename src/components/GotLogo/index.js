import React from 'react';
import './style.css';

function GotLogo({ logo }) {
    return (
        <img 
        id="got-logo"
        src={logo.image} 
        alt={logo.name}
        ></img>
    );
}

export default GotLogo;