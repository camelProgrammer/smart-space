import React, { useState } from 'react';
import './_navbar.scss';

// Images
import logo from '../../assets/images/logo.svg';
import hamburgerClose from '../../assets/icons/hamburgerClose.svg';
import hamburgerOpen from '../../assets/icons/hamburgerOpen.svg';

const Menu = () => (
    <>
        <ul className="navbar-links__container_list">
            <li>
                <a href="#Home">Home</a>
            </li>
            <li>
                <a href="#About">About</a>
            </li>
            <li>
                <a href="#Service">Service</a>
            </li>
            <li>
                <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
                <a href="#Blog">Blog</a>
            </li>
            <li>
                <a href="#Contact">Contact</a>
            </li>
        </ul>
    </>
);

const MenuSmall = () => (
    <>
        <ul className="navbar-links__container_list navbar-links__container_list--small">
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

// const openMenu = () => {
//     setActive(!isActive);
// };

const Navbar = () => {
    const [hamburger, setHamburger] = useState(true);

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links__logo">
                    <img src={logo} alt="Smart Space" />
                </div>

                <div className="navbar-links__container">
                    {hamburger ? (
                        <img
                            className="navbar-hamburger"
                            src={hamburgerClose}
                            alt="Menu close"
                            onClick={() => setHamburger(false)}
                        />
                    ) : (
                        <>
                            <img
                                className="navbar-hamburger"
                                src={hamburgerOpen}
                                alt="Menu close"
                                onClick={() => setHamburger(true)}
                            />
                            <MenuSmall />
                        </>
                    )}

                    <Menu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
