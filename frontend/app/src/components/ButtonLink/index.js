import React from 'react';
import { Link } from 'react-router-dom';

import './Style.scss';
const ButtonLink = ({
    text,
    link,
    color = 'purple', //purple or brown
    size = 'md', //sm / md / lg
    align = 'center' //left / center / right
}) => {
    let className = `ButtonLink--link ButtonLink--link-color__${color} ButtonLink--link-size__${size}  ButtonLink--link-align__${align}`;

    return (
        <div className="ButtonLink">
            <Link to={link} className={className}>
                {text}
            </Link>
        </div>
    );
};

export default ButtonLink;
