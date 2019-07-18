import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Style.scss';
const ButtonLink = ({
    text,
    link,
    color = 'purple', //purple or brown
    size = 'md', //sm / md / lg
    align = 'center', //left / center / right
    type = 'link'
}) => {
    let className = `ButtonLink--link ButtonLink--link-color__${color} ButtonLink--link-size__${size}  ButtonLink--link-align__${align}`;

    if (type === 'link') {
        return (
            <div className="ButtonLink">
                <Link to={link} className={className}>
                    {text}
                </Link>
            </div>
        );
    }
    if (type === 'anchor') {
        return (
            <div className="ButtonLink">
                <HashLink to={link} className={className}>
                    {text}
                </HashLink>
            </div>
        );
    }
};

export default ButtonLink;
