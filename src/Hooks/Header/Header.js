import React from 'react';
import './HeaderR.css';

function Header() {
    return (
        <div className="header">
            <div  className="left-header">
                <img src="./Logo.png" alt="logo" className="logo" />
                <a href="#" className="navigation-links">Products</a>
                <a href="#" className="navigation-links">Resources</a>
                <a href="#" className="navigation-links">Buy Instantly</a>
            </div>
            <div className="right-header">
                <a href="#" className="navigation-links">Login</a>
                <a href="#" className="navigation-links">Sign up</a>
            </div>
        </div>
    );
}

export default Header;