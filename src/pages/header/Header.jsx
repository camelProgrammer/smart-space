import React from 'react';
import './_header.scss';

import home from '../../assets/icons/home.svg';
import header from '../../assets/images/header.png';

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <p>RESIDENTIAL & OFFICE SPACES</p>
                <h1 class="header-content__heading">
                    Smart Living Style for Smart People
                </h1>
                <p class="header-content__text">
                    Much did had call new drew that kept. Limits expect wonder
                    law she. Now has you views woman noisy match money rooms.
                </p>
            </div>

            <div className="header-content__input">
                <div className="header-content__input__main">
                    <img
                        className="header-content__input__img"
                        src={home}
                        alt="home"
                    />
                    <input
                        type="text"
                        placeholder="Enter Zipcode to search properties"
                    />
                </div>

                <button className="header-content__input__btn" type="submit">
                    Search Now!
                </button>
            </div>

            <div className="header-container">
                <img src={header} alt="header" />

                <div className="header-container__social">
                    <img src={home} alt="facebook" />
                    <img src={home} alt="instagram" />
                    <img src={home} alt="twitter" />
                    <img src={home} alt="linkedin" />
                </div>

                <div className="header-container__bg"></div>
            </div>
        </div>
    );
};

export default Header;
