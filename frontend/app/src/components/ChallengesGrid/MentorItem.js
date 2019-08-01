import React from 'react';

import Image from '../Image';

const MentorItem = ({ trackMentorDescription, logo, alt } = this.props) => {
    return (
        <div className="ChallengesGrid--track__mentor-item">
            <Image
                className="ChallengesGrid--track__mentor-item-image"
                image={logo}
                alt={alt}
            />
            <div className="ChallengesGrid--track__mentor-item-right">
                <span className="ChallengesGrid--track__mentor-item-right-content">
                    {trackMentorDescription}
                </span>
            </div>
        </div>
    );
};
export default MentorItem;
