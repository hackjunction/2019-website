import React from 'react';
import './style.scss';

import Markdown from '../Markdown';

const BasicHeader = ({ title, body, children }) => {
    return (
        <div className="BasicHeader">
            <h2 className="BasicHeader--title">{title}</h2>
            <div className="BasicHeader--body">
                <Markdown source={body} />
                {children}
            </div>
        </div>
    );
};

export default BasicHeader;
