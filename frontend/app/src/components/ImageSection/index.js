import React from 'react';

import SingleColumnSection from '../SingleColumnSection';
import Image from '../Image';
import Markdown from '../Markdown';

import './style.scss';

const ImageSection = ({ image, title, content }) => {
    return (
        <SingleColumnSection className="ImageSection">
            <div className="ImageSection--container">
                <Image
                    image={image}
                    className="ImageSection--container__image"
                />
                <Markdown
                    source={content}
                    className="ImageSection--container__content"
                />
            </div>
        </SingleColumnSection>
    );
};
export default ImageSection;
