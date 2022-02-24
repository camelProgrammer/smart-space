import React from 'react';
import './_brand.scss';

const Brand = ({ brandUrl, brantAlt }) => {
    return (
        <div className="brand">
            <img src={brandUrl} alt={brantAlt} />
        </div>
    );
};

export default Brand;
