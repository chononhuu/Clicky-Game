import React from 'react';
import './style.css';

function GotTitle({ logo }) {  
    return (
        <img 
        id="got-title" 
        src={logo.image} 
        alt={logo.name}
        ></img>
    );
}

export default GotTitle;