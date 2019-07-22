import React from 'react';

import Image from '../Image';

const ChallengeItem = ({ name, partner, content } = this.props) => {
    return (
        <div className="ChallengesGrid--track__challenge">
            <Image
                className="ChallengesGrid--track__challenge-image"
                image={partner.logo}
                alt={`Partner logo ${partner.logo}`}
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
