import React, { PureComponent } from 'react';

import { Video as CloudinaryVideo } from 'cloudinary-react';
import './style.scss';

class Video extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            loaded: false
        };

        this.setLoaded = this.setLoaded.bind(this);
    }

    setLoaded() {
        this.setState({
            loaded: true
        });
    }

    render() {
        const {
            video = {},
            alt,
            className,
            width,
            height,
            crop,
            gravity
        } = this.props;
        const { loaded } = this.state;

        if (video !== null && video.public_id) {
            return (
                <CloudinaryVideo
                    className={`Video ${className} ${
                        loaded ? '' : 'Video-loading'
                    }`}
                    alt={alt}
                    publicId={video.public_id}
                    onLoad={this.setLoaded}
                    transformation={{
                        width,
                        height,
                        crop,
                        gravity
                    }}
                />
            );
        }
        return (
            <video
                src={video ? video.url : ''}
                alt={alt}
                className={`Video ${className} ${
                    loaded ? '' : 'Video-loading'
                }`}
                width={width}
                height={height}
                onLoad={this.setLoaded}
            />
        );
    }
}

export default Video;
