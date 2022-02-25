import React from 'react';
import './_features.scss';

// Images
import featuresImg from '../../assets/images/features.svg';

// Components
import FeatureInfo from '../../components/feature/FeatureInfo';

const FeatureInfoData = [
    {
        title: 'Budget',
        data: 'Confidential',
    },
    {
        title: 'Size',
        data: '1200 m2',
    },
    {
        title: 'Type',
        data: 'Office',
    },
    {
        title: 'Status',
        data: 'Done',
    },
    {
        title: 'Location',
        data: 'Switzerland',
    },
    {
        title: 'Flat',
        data: '8 Room',
    },
];

const Button = () => (
    <>
        <button className="features-content__btn" type="submit">
            YES! I WANT BOOK “OFFICE PACKAGE”
        </button>
    </>
);

const features = () => {
    return (
        <div className="features">
            <h2 className="heading">Featured Listing of the Week</h2>

            <div className="features-main">
                <div className="features-container">
                    <img src={featuresImg} alt="Office" />
                </div>

                <div className="features-content">
                    <p className="features-content__heading">
                        The and collecting for the motionless difficulty son.
                    </p>

                    <p className="features-content__text">
                        Conveying or northward offending admitting perfectly my.
                        Colonel gravity get thought fat smiling add but
                        difficult situations.
                    </p>

                    <div className="features-content__info">
                        {FeatureInfoData.map((item, index) => (
                            <FeatureInfo
                                title={item.title}
                                data={item.data}
                                key={index}
                            />
                        ))}
                    </div>

                    <Button />
                </div>
            </div>
        </div>
    );
};

export default features;
