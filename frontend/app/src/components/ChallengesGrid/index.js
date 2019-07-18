import React from 'react';
import { connect } from 'react-redux';

import ChallengeItem from './ChallengeItem';
import SingleColumnSection from '../SingleColumnSection';
import Divider from '../Divider';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';
import * as StaticSelectors from '../../redux/staticcontent/selectors';
import './style.scss';

const ChallengesGrid = props => {
    const { getText } = props;
    const renderTrack = tracks => {
        const renderChallenges = challenges => {
            const mapChallenges = () => {
                return challenges.map(challenge => {
                    return <ChallengeItem {...challenge} />;
                });
            };
            return challenges.length ? (
                mapChallenges()
            ) : (
                <h1 className="ChallengesGrid--track__challenge-coming">
                    {getText('challengeComingSoon')}
                </h1>
            );
        };
        return tracks.map(track => {
            return (
                <div
                    className="ChallengesGrid--track"
                    key={track._id}
                    id={track.name}
                >
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
    tracks: ContentSelectors.tracks(state),
    getText: StaticSelectors.buildGetText(state)
});

export default connect(mapStateToProps)(ChallengesGrid);
