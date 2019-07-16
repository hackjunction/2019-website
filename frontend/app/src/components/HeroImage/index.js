import React from 'react';
import './style.scss';

import Image from '../Image';

const HeroImage = props => {
    return (
        <div className="HeroImage">
            <Image image={props.image} className="HeroImage--img" />
            <span className="HeroImage--content">{props.children}</span>
        </div>
    );
};

export default HeroImage;
