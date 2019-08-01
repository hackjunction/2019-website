import React from 'react';

import './style.scss';
const imageLeft = require('../../assets/misc/readyLeft.png');
const imageRight = require('../../assets/misc/readyRight.png');

const StylishContainer = ({ children }) => {
    return (
        <div className="StylishContainer">
            <div className="StylishContainer-left">
                <img
                    src={imageLeft}
                    alt="background"
                    className="StylishContainer-left__image"
                />
            </div>
            <div className="StylishContainer-children">{children}</div>
            <div className="StylishContainer-right">
                <img
                    src={imageRight}
                    alt="background"
                    className="StylishContainer-right__image"
                />
            </div>
        </div>
    );
};
export default StylishContainer;
