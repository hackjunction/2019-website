import React from 'react';
import './style.scss';

import Image from '../Image';
import GradientLink from '../GradientLink';

const HeroCTA = props => {
    return (
        <div className="HeroCTA">
            <Image className="HeroCTA--image" image={props.image} />
            <span className="HeroCTA--subtitle">{props.subtitle}</span>
            {/* <GradientLink href={props.ctaLink} text={props.ctaText} />*/}
        </div>
    );
};

export default HeroCTA;
