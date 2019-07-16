import React from 'react';
import { connect } from 'react-redux';

import ChallengeItem from './ChallengeItem';
import SingleColumnSection from '../SingleColumnSection';
import Divider from '../Divider';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';
import './style.scss';

const ChallengesGrid = props => {
    const renderTrack = tracks => {
        const renderChallenges = challenges => {
            if (challenges === '') {
                return <h1>Coming soon!</h1>;
            }
            return challenges.map(challenge => {
                return <ChallengeItem {...challenge} />;
            });
        };
        return tracks.map(track => {
            return (
                <div className="ChallengesGrid--track" key={track._id}>
                    <SingleColumnSection
                        title={track.name}
                        subtitle={track.description}
                    />
                    <Divider sm />

                    <div>{renderChallenges(track.challenges)}</div>

                    <Divider md />
                </div>
            );
        });
    };
    return <div className="ChallengesGrid">{renderTrack(props.tracks)}</div>;
};

const mapStateToProps = state => ({
    tracks: ContentSelectors.tracks(state)
});

export default connect(mapStateToProps)(ChallengesGrid);
