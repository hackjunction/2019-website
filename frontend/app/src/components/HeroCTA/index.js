import React from 'react';
import './style.scss';

import Image from '../Image';
import GradientLink from '../GradientLink';
import Divider from '../Divider';

const HeroCTA = props => {
    return (
        <div className="HeroCTA">
            <Image className="HeroCTA--image" image={props.image} />
            <span className="HeroCTA--subtitle">{props.subtitle}</span>
            <Divider sm />
            <span className="HeroCTA--content">{props.children}</span>
            {/* <GradientLink href={props.ctaLink} text={props.ctaText} />*/}
        </div>
    );
};

export default HeroCTA;
