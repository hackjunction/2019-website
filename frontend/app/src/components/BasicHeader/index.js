import React from 'react';
import './style.scss';

const BasicHeader = ({ title, body, children }) => {
    return (
        <div className="BasicHeader">
            <h2 className="BasicHeader--title">{title}</h2>
            <p className="BasicHeader--body">{body}</p>
            <span className="BasicHeader--children">{children}</span>
        </div>
    );
};

export default BasicHeader;
