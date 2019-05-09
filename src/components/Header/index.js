import React from 'react';
import GotTitle from '../GotTitle';
import './style.css';

function Header({ logo }) {
    return (
        <header>
            <GotTitle logo={logo[1]} 
        /></header>
    );
}

export default Header;
