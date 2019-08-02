import React from 'react';
import './style.scss';

import Markdown from '../Markdown/';

const SingleColumnSection = ({ title, subtitle, children, center = false }) => {
    return (
        <div className="SingleColumnSection">
            <h3 className="SingleColumnSection--title">{title}</h3>
            <Markdown
                source={subtitle}
                className="SingleColumnSection--subtitle"
            />
            <div
                className={`SingleColumnSection--content ${
                    center ? 'SingleColumnSection--content-center' : ''
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default SingleColumnSection;
