import React from 'react';
import './_FeatureInfo.scss';

const FeatureInfo = ({ title, data }) => {
    return (
        <div className="featureInfo">
            <p className="featureInfo-title">{title}</p>
            <p>{data}</p>
        </div>
    );
};

export default FeatureInfo;
