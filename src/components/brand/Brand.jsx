import React from 'react';

const Brand = ({ imgUrl, imgAlt }) => {
    return (
        <div className="brand">
            <img src={imgUrl} alt={imgAlt} />
        </div>
    );
};

export default Brand;
