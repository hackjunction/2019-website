import React from 'react';

import Image from '../Image';
import Markdown from '../Markdown';

import './style.scss';

const ImageSection = ({ image, title, content }) => {
    return (
        <div className="ImageSection">
            <div className="ImageSection--left">
                <Image image={image} className="ImageSection--left__image" />
            </div>
            <div className="ImageSection--right">
                <h4 className="ImageSection--right__title">{title}</h4>
                <Markdown
                    source={content}
                    className="ImageSection--right__content"
                />
            </div>
        </div>
    );
};
export default ImageSection;
