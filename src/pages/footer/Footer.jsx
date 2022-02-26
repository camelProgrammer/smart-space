import React from 'react';
import './_footer.scss';

//Images
import logo from '../../assets/images/logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-menu">
                <img
                    className="footer-menu__logo"
                    src={logo}
                    alt="Smart Space"
                />

                <ul className="footer-menu__container">
                    <li className="footer-menu__container_item">Home</li>
                    <li className="footer-menu__container_item">About</li>
                    <li className="footer-menu__container_item">Service</li>
                    <li className="footer-menu__container_item">Portfolio</li>
                    <li className="footer-menu__container_item">Blog</li>
                    <li className="footer-menu__container_item">Contact</li>
                </ul>
            </div>

            <p className="footer-copyright">
                Copyright &copy; 2021 AR Shakir . All Rights Reseved.
            </p>
        </footer>
    );
};

export default Footer;
