import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Style.scss';
const ButtonLink = ({
    text,
    link,
    color = 'purple', //purple or brown
    size = 'md', //sm / md / lg /fp
    align = 'center', //left / center / right
    type = 'link', //link for inside website || anchor to specific object in page || outside for linking outside website (www.google.com)
    hover = 'no',
    hoverText = ''
}) => {
    let className = `ButtonLink--link ButtonLink--link-color__${color} ButtonLink--link-size__${size}  ButtonLink--link-align__${align} ${
        text ? '' : 'ButtonHide'
    }`;

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
    if (type === 'outside') {
        return (
            <div className="ButtonLinkReady">
                <a href={link} className={className}>
                    <span className={`ButtonLinkReady--text `}>{text}</span>
                    <span className={`ButtonLinkReady--hoverText `}>
                        {hoverText}
                    </span>
                </a>
            </div>
        );
    }
};

export default ButtonLink;
