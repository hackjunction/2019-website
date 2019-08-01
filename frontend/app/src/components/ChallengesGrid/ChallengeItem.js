import React from 'react';

import Image from '../Image';

const ChallengeItem = ({ name, partner, content, alt } = this.props) => {
    return (
        <div className="ChallengesGrid--track__challenge">
            <Image
                className="ChallengesGrid--track__challenge-image"
                image={partner.logo}
                alt={alt}
            />
            <div className="ChallengesGrid--track__challenge-right">
                <span className="ChallengesGrid--track__challenge-right-name">
                    {name}
                </span>
                <span className="ChallengesGrid--track__challenge-right-content">
                    {content}
                </span>
            </div>
        </div>
    );
};

export default ChallengeItem;
