import React from 'react';
import './style.css';

function GotCard({ className, id, image, name, handler }) {  
    return (
        <img
        className={className}
        src={image}
        alt={name}
        onClick={() => handler(id)}
        ></img>
    );
}

export default GotCard;