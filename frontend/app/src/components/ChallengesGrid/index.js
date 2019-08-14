import React from 'react';
import { connect } from 'react-redux';
import snake from 'to-snake-case';

import ChallengeItem from './ChallengeItem';
import MentorItem from './MentorItem';

import SingleColumnSection from '../SingleColumnSection';
import Divider from '../Divider';

import config from '../../config';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';
import * as StaticSelectors from '../../redux/staticcontent/selectors';
import './style.scss';

const ChallengesGrid = props => {
    const { getText } = props;
    const renderTrack = tracks => {
        const renderMentor = mentors => {
            return mentors.length
                ? mentors.map(mentor => {
                      return (
                          <div className="ChallengesGrid--track__mentor">
                              <span className="ChallengesGrid--track__mentor-title">
                                  {getText('trackMentor') || 'Track Mentor'}
                              </span>
                              <MentorItem {...mentor} key={mentor.name} />
                          </div>
                      );
                  })
                : '';
        };

        const renderChallenges = challenges => {
            const mapChallenges = () => {
                return challenges.map(challenge => {
                    return (
                        <ChallengeItem
                            {...challenge}
                            key={snake(challenge.name)}
                        />
                    );
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
                <div id={snake(track.name)}>
                    <Divider md />
                    <div className="ChallengesGrid--track" key={track._id}>
                        <SingleColumnSection
                            title={track.name}
                            subtitle={track.description}
                        />

                        <Divider sm />
                        <div>
                            {config.IS_DEBUG
                                ? renderChallenges(track.challenges)
                                : null}
                        </div>
                        <Divider sm />
                        <div>
                            {config.IS_DEBUG
                                ? renderMentor(track.mentors)
                                : null}
                        </div>
                    </div>
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
