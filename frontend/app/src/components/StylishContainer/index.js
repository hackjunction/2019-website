import React from 'react';

import './style.scss';
const imageLeft = require('../../assets/misc/readyLeft.png');
const imageRight = require('../../assets/misc/readyRight.png');

const StylishContainer = ({ children }) => {
    return (
        <div className="StylishContainer">
            <img
                src={imageLeft}
                alt="background"
                className="StylishContainer-left"
            />
            <div className="StylishContainer-children">{children}</div>
            <img
                src={imageRight}
                alt="background"
                className="StylishContainer-right"
            />
        </div>
    );
};
export default StylishContainer;
