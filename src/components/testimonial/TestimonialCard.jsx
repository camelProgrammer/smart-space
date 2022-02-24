import React from 'react';
import './_TestimonialCard.scss';

const TestimonialCard = ({
    ratingUrl,
    ratingAlt,
    text,
    personUrl,
    personAlt,
    personName,
    personLocation,
}) => {
    return (
        <div className="testimonial-card">
            <img
                className="testimonial-card__rating"
                src={ratingUrl}
                alt={ratingAlt}
            />

            <p className="testimonial-card__text">{text}</p>

            <div className="testimonial-card__person">
                <div className="testimonial-card__person_img">
                    <img src={personUrl} alt={personAlt} />
                </div>
                <div className="testimonial-card__person_info">
                    <p className="testimonial-card__person_name">
                        {personName}
                    </p>
                    <p className="testimonial-card__person_location">
                        {personLocation}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
