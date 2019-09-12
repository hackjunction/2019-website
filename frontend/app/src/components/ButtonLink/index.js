import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash-es';
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';
import styles from './styles.module.scss';

const ButtonLink = ({
    text,
    link,
    color = 'purple', //Purple or Brown
    size = 'md', //Sm / Md / Lg /Fp
    align = 'center', //Left / Center / Right
    /*type: 
        "mainsite" for link to open in new window, 
        "link" for inside website(default), 
        "anchor" for anchor links
    */
    type = 'link',
    hoverText = '',
    block = false,
    smooth = false
}) => {
    const className = classNames(
        styles.ButtonLinkLink,
        [styles[`ButtonLinkLinkColor${color}`]],
        [styles[`ButtonLinkLinkSize${size}`]],
        [styles[`ButtonLinkLinkAlign${align}`]],
        {
            [styles.ButtonLinkLinkBlock]: block,
            [styles.ButtonHide]: isEmpty(text)
        }
    );
    console.log('BUTTON TYPE: ' + type);
    /* If hover text is not empty, return hoverButton instead */
    if (hoverText === '') {
        return (
            <div className={styles.ButtonLink}>
                {/* Check type and return accordingly */}

                {/* Used for linking inside website */}
                {type === 'link' ? (
                    <Link to={link} className={className}>
                        {text}
                    </Link>
                ) : null}

                {/* Used for anchor links */}
                {type === 'anchor' ? (
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
                ) : null}
                {/* Link that opens in new window */}
                {type === 'mainsite' ? (
                    <a
                        href={link}
                        className={className}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {text}
                    </a>
                ) : null}
            </div>
        );
    } else {
        return (
            <div className={styles.ButtonLinkHover}>
                <div href={link} className={className}>
                    <span className={styles.ButtonLinkHoverText}>{text}</span>
                    <span className={styles.ButtonLinkHoverHover}>
                        {hoverText}
                    </span>
                </div>
            </div>
        );
    }
};

export default ButtonLink;
