import React from 'react';
import ais from '.././Assets/ais_logo_dark_no_bg.png'

import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                    <a href="https://www.aisutd.org/" target="_blank" rel="noreferrer">
                        <img src={ais} alt="AIS logo"></img>
                    </a>
                    <h1>OpenAIM</h1>
            </div>
            
        </>);
}

export default Navbar;