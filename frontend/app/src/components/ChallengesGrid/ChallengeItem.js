import React from 'react';

import Image from '../Image';

const ChallengeItem = ({ name, partner, content, _id } = this.props) => {
    return (
        <div className="ChallengesGrid--track__challenge" key={_id}>
            <Image
                className="ChallengesGrid--track__challenge-image"
                image={partner.logo}
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
