import React from 'react';
import './_aboutCard.scss';

const Card = ({ imgUrl, imgAlt, title, text }) => {
    return (
        <div className="card">
            <img className="card__img" src={imgUrl} alt={imgAlt} />
            <p className="card__title">{title}</p>
            <p className="card__text">{text}</p>
        </div>
    );
};

export default Card;
