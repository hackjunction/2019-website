import React from 'react';
import styles from './ChallengesGrid.module.scss';
import { connect } from 'react-redux';

import { createSelector } from 'reselect';
import snake from 'to-snake-case';
import sortBy from 'lodash-es';

import ChallengeItem from './ChallengeItem';

import SingleColumnSection from '../SingleColumnSection';
import Divider from '../Divider';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';
import * as StaticSelectors from '../../redux/staticcontent/selectors';

const ChallengesGrid = props => {
    const { getText } = props;

    const renderMentors = mentors => {
        if (mentors.length) {
            return (
                <React.Fragment>
                    <h3 className={styles.mentorTitle}>
                        {getText('trackMentor') || 'Track Mentor'}
                    </h3>
                    {mentors.map(mentor => (
                        <ChallengeItem
                            key={mentor.name}
                            logo={mentor.logo}
                            content={mentor.trackMentorDescription}
                        />
                    ))}
                </React.Fragment>
            );
        }
    };

    const renderChallenges = challenges => {
        if (challenges.length) {
            const challengesSorted = challenges.sort((a, b) =>
                a.priority > b.priority ? 1 : -1
            );
            return challengesSorted.map(challenge => (
                <ChallengeItem
                    key={snake(challenge.name)}
                    logo={challenge.partner.logo}
                    title={challenge.name}
                    content={challenge.content}
                    slug={challenge.slug}
                />
            ));
        } else {
            return (
                <h1 className={styles.challengesPlaceholder}>
                    {getText('challengeComingSoon')}
                </h1>
            );
        }
    };

    const renderTracks = tracks => {
        return tracks.map(track => {
            return (
                <div id={snake(track.name)} key={track._id}>
                    <Divider md />
                    <SingleColumnSection>
                        <h2 className={styles.trackName}>{track.name}</h2>
                        <p className={styles.trackDescription}>
                            {track.description}
                        </p>
                        <Divider sm />
                        {renderChallenges(track.challenges)}
                        {renderMentors(track.mentors)}
                    </SingleColumnSection>
                </div>
            );
        });
    };
    return <div className={styles.wrapper}>{renderTracks(props.tracks)}</div>;
};

const mapStateToProps = state => ({
    tracks: ContentSelectors.tracks(state),
    getText: StaticSelectors.buildGetText(state)
});

export default connect(mapStateToProps)(ChallengesGrid);
