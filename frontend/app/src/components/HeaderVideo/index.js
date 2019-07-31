import React from 'react';
import './style.scss';

import Video from '../Video';

const HeroVideo = props => {
    return (
        <div className="HeroVideo">
            <Video video={props.video} className="HeroVideo--video" />
            <span className="HeroVideo--content">{props.children}</span>
        </div>
    );
};

export default HeroVideo;
