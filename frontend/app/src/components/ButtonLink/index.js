import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash-es';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import './Style.scss';
const ButtonLink = ({
    text,
    link = '/',
    color = 'purple', //purple or brown
    size = 'md', //sm / md / lg /fp
    align = 'center', //left / center / right
    type = 'link', //link for inside website || anchor to specific object in page || outside for linking outside website (www.google.com)
    hoverText = '',
    block = false,
    smooth = false
}) => {
    const className = classNames({
        [`ButtonLink--link`]: true,
        [`ButtonLink--link-color__${color}`]: true,
        [`ButtonLink--link-size__${size}`]: true,
        [`ButtonLink--link-align__${align}`]: true,
        'ButtonLink--link-block': block,
        'ButtonLink--link-noLink': type === 'hover',
        ButtonHide: isEmpty(text)
    });

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
                <HashLink
                    to={link}
                    scroll={el =>
                        el.scrollIntoView({
                            behavior: smooth ? 'smooth' : 'auto',
                            block: 'start',
                            inline: 'nearest'
                        })
                    }
                    className={className}
                >
                    {text}
                </HashLink>
            </div>
        );
    }
    if (type === 'mainsite') {
        return (
            <div className="ButtonLink">
                <a
                    href={link}
                    className={className}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {text}
                </a>
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
    if (type === 'hover') {
        return (
            <div className="ButtonLinkHover">
                <div href={link} className={className}>
                    <span className={`ButtonLinkHover--text `}>{text}</span>
                    <span className={`ButtonLinkHover--hoverText `}>
                        {hoverText}
                    </span>
                </div>
            </div>
        );
    }
};

export default ButtonLink;
