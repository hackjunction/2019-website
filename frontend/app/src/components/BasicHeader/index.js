import React from 'react';
import './style.scss';

const BasicHeader = ({ title, body, children }) => {
    return (
        <div className="BasicHeader">
            <h2 className="BasicHeader--title">{title}</h2>
            <p className="BasicHeader--body">
                {body}
                {children}
            </p>
        </div>
    );
};

export default BasicHeader;
