import React from 'react';

import Image from '../Image';

const MentorItem = ({ trackMentorDescription, logo } = this.props) => {
    return (
        <div className="ChallengesGrid--track__mentor-item">
            <Image
                className="ChallengesGrid--track__mentor-item-image"
                image={logo}
                alt={`Mentor logo ${logo}`}
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
