import React from 'react';

import ButtonLink from '../ButtonLink';
import StylishContainer from '../StylishContainer';

import './style.scss';

const AreYouReady = ({ title, button, buttonHover, description, link }) => {
    return (
        <StylishContainer>
            <div className="Ready">
                <h2 className="Ready--title">{title}</h2>
                <ButtonLink
                    hover="yes"
                    hoverText={buttonHover}
                    text={button}
                    size="lg"
                    link={link}
                    type="outside"
                    className="Ready--button"
                />
                <span className="Ready--description">{description}</span>
            </div>
        </StylishContainer>
    );
};

export default AreYouReady;
