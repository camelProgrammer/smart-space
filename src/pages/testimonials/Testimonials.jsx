import React from 'react';
import './_testimonials.scss';

// Components
import TestimonialCard from '../../components/testimonial/TestimonialCard';
import Brand from '../../components/brand/Brand';

// Images
import {
    person01,
    person02,
    person03,
    stars04,
    stars05,
    airbnb,
    cisco,
    ebay,
    uber,
    microsoft,
} from './imports';

const cardsData = [
    {
        ratingUrl: stars04,
        text: 'Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible. Consulted admitting oh mr up as described.',
        personUrl: person01,
        personAlt: 'First person',
        personName: 'Jane Cooper',
        personLocation: 'Los Angeles, CA',
    },
    {
        ratingUrl: stars05,
        text: 'The and collecting motionless difficulty son. His hearing staying ten colonel met. Sex drew six easy four dear cold',
        personUrl: person02,
        personAlt: 'Second person',
        personName: 'Robert Fox',
        personLocation: 'New York City, NY',
    },
    {
        ratingUrl: stars05,
        text: 'Sociable on as carriage my position weddings raillery consider. Peculiar trifling absolute and wandered vicinity property yet.',
        personUrl: person03,
        personAlt: 'Third person',
        personName: 'Leslie Alexander',
        personLocation: 'Buffalo, NJ',
    },
];

const brandsData = [
    {
        brandUrl: airbnb,
        brandAlt: 'airbnb',
    },
    {
        brandUrl: cisco,
    },
    {
        brandUrl: ebay,
    },
    {
        brandUrl: uber,
    },
    {
        brandUrl: microsoft,
    },
];

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h2 className="heading">
                Loved by businesses, and individuals across the globe.
            </h2>

            <div className="testimonials-content">
                {cardsData.map((item, index) => (
                    <TestimonialCard
                        ratingUrl={item.ratingUrl}
                        text={item.text}
                        personUrl={item.personUrl}
                        personAlt={item.personAlt}
                        personName={item.personName}
                        personLocation={item.personLocation}
                        key={index}
                    />
                ))}
            </div>

            <div className="testimonials-container">
                <div className="testimonials-container__brand">
                    {brandsData.map((item, index) => (
                        <Brand brandUrl={item.brandUrl} key={index} />
                    ))}
                </div>

                <div className="testimonials-container__info">
                    <p>
                        Give us a Call 1-888-111-2222 and we can set you up, or
                        &nbsp; <span> check our pricing plans</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
