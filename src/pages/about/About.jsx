import React from 'react';
import './_about.scss';

// Components
import Card from '../../components/aboutCard/aboutCard';

// Images
import { card01, card02, card03, line } from './imports';

const About = () => {
    return (
        <div className="about" id="About">
            <h2 className="heading">How it works?</h2>

            <div className="about__container">
                <Card
                    imgUrl={card01}
                    imgAlt="Research Suburbs"
                    title="Research Suburbs"
                    text="Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight."
                />

                <img className="line" src={line} alt="line" />

                <Card
                    imgUrl={card02}
                    imgAlt="Instant Valuation"
                    title="Instant Valuation"
                    text="Conveying or northward offending admitting perfectly my. Colonel gravit and moonlight."
                />

                <img className="line" src={line} alt="line" />

                <Card
                    imgUrl={card03}
                    imgAlt="Track Property"
                    title="Track Property"
                    text="Moderate children at of outweigh it. Unsatiable it considered invitation he travelling insensible."
                />
            </div>
        </div>
    );
};

export default About;
