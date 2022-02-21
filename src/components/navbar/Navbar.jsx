import React, { useState } from 'react';
import './_navbar.scss';

import logo from '../../assets/images/logo.svg';

const Menu = () => (
    <>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Service</a>
            </li>
            <li>
                <a href="#">Portfolio</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
    </>
);

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links__logo">
                    <img src={logo} alt="Smart Space" />
                </div>

                <div className="navbar-links__container">
                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
