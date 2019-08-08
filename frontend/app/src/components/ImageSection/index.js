import React from 'react';

import Image from '../Image';
import Markdown from '../Markdown';

import './style.scss';

const ImageSection = ({
    image,
    title,
    content,
    fontColor = 'white',
    children
}) => {
    let className = `ImageSection ImageSection--fontColor__${fontColor}`;
    return (
        <div className={className}>
            <div className="ImageSection--left">
                <Image image={image} className="ImageSection--left__image" />
            </div>
            <div className="ImageSection--right">
                <Markdown
                    source={content}
                    className="ImageSection--right__content"
                />
                {children}
            </div>
        </div>
    );
};
export default ImageSection;
