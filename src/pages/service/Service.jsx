import React from 'react';
import './_service.scss';

// Images
import { service01, service02, service03 } from './imports';

const Service = () => {
    return (
        <div className="service">
            <div className="service-container">
                <div className="service-container__informations">
                    <h2 className="heading">Best Real Estate Deals</h2>
                    <p className="service-container__informations_text">
                        Colonel gravity get thought fat smiling add but. Wonder
                        twenty hunted and put income set desire expect.
                    </p>
                </div>
                <button className="service-container__btn" type="submit">
                    View All Property
                </button>
            </div>
            <div className="service-categories">
                <p className="service-categories__item service-categories__item--clicked">
                    Residential Property
                </p>
                <p className="service-categories__item">Commercial Property</p>
                <p className="service-categories__item">Agriculture Property</p>
                <p className="service-categories__item">Industrial Property</p>
            </div>

            <div className="service-content">
                <img src={service01} alt="" />
                <img src={service02} alt="" />
                <img src={service03} alt="" />
            </div>
        </div>
    );
};

export default Service;
