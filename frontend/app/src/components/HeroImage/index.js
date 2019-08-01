import React, { useState } from 'react';
import './style.scss';
import { MediaQuery } from 'react-responsive';

import Image from '../Image';

const Video = ({ onLoad }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <video
            autoPlay
            loop
            muted
            playsInline
            className={`HeroImage--video ${loaded && 'HeroImage--video-loaded'}`}
            onPlay={() => setLoaded(true)}
        >
            <MediaQuery maxWidth={600}>
                <source type="video/webm" src={require('../../assets/videos/header_600x380.webm')} />
                <source type="video/mp4" src={require('../../assets/videos/header_600x380.mp4')} />
            </MediaQuery>
            <MediaQuery minWidth={601}>
                <MediaQuery maxWidth={900}>
                    <source type="video/webm" src={require('../../assets/videos/header_900x600.webm')} />
                    <source type="video/mp4" src={require('../../assets/videos/header_900x600.mp4')} />
                </MediaQuery>
            </MediaQuery>
            <MediaQuery minWidth={901}>
                <source type="video/webm" src={require('../../assets/videos/header_1920x900.webm')} />
                <source type="video/mp4" src={require('../../assets/videos/header_1920x900.mp4')} />
            </MediaQuery>
        </video>
    );
};

const HeroImage = props => {
    return (
        <div className="HeroImage">
            <Image image={props.image} className="HeroImage--img" />
            {props.isVideo && <Video />}
            <span className="HeroImage--content">{props.children}</span>
        </div>
    );
};

export default HeroImage;
