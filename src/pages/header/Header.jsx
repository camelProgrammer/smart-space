import React from 'react';
import './_header.scss';

// Images
import home from '../../assets/icons/home.svg';
import header from '../../assets/images/header.png';

// Components
import Brand from '../../components/brand/Brand';
import { airbnb, buzz, chase, gucc, microsoft, uber } from './imports';

const brandsData = [
    {
        brandUrl: airbnb,
        brandAlt: 'airbnb',
    },
    {
        brandUrl: buzz,
    },
    {
        brandUrl: chase,
    },
    {
        brandUrl: gucc,
    },
    {
        brandUrl: microsoft,
    },
    {
        brandUrl: uber,
    },
];

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <p className="header-content--orange">
                    RESIDENTIAL & OFFICE SPACES
                </p>

                <h1 className="header-content__heading">
                    Smart Living Style for Smart People
                </h1>

                <p className="header-content__text">
                    Much did had call new drew that kept. Limits expect wonder
                    law she. Now has you views woman noisy match money rooms.
                </p>

                <div className="header-content__input">
                    <div className="header-content__input_left">
                        <img
                            className="header-content__input_img"
                            src={home}
                            alt="home"
                        />
                        <input
                            type="text"
                            placeholder="Enter Zipcode to search properties"
                        />
                    </div>

                    <button className="header-content__input_btn" type="submit">
                        Search Now
                    </button>
                </div>

                <div className="header-content__brand">
                    <p className="header-content__brand_text">
                        Our Amazing Partners
                    </p>

                    <div className="header-content__brand_items">
                        {brandsData.map((item, index) => (
                            <Brand brandUrl={item.brandUrl} key={index} />
                        ))}
                    </div>
                </div>
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
