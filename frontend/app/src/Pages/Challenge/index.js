import React, { PureComponent } from 'react';
import styles from './style.module.scss';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { findIndex } from 'lodash-es';

import NotFoundPage from '../NotFound';

import Page from '../PageHOC';

import HeroImage from '../../components/HeroImage';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import Divider from '../../components/Divider';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Image from '../../components/Image';

import * as DynamicSelectors from '../../redux/dynamiccontent/selectors';
import * as StaticSelectors from '../../redux/staticcontent/selectors';

class ChallengePage extends PureComponent {
    componentDidMount() {
        // this.props.SortChallenges();
    }
    render() {
        console.log('GET TEXT', this.props.getText('challengePageWhatWeBring'));
        const {
            challenge,
            previousChallenge,
            nextChallenge,
            getText
        } = this.props;

        console.log('THIS PROPS', this.props);

        if (!challenge) {
            return <NotFoundPage />;
        }

        return (
            <Page
                className="ChallengePage"
                pageTitle={challenge.name}
                metaDesc={challenge.description}
                ogImageUrl={
                    challenge.track.headerImage
                        ? challenge.track.headerImage.url
                        : null
                }
            >
                <HeroImage image={challenge.track.headerImage}>
                    <div className={styles.headerWrapper}>
                        {challenge.partner && challenge.partner.logo && (
                            <div className={styles.headerLogo}>
                                <Image
                                    className={styles.headerLogoInner}
                                    image={challenge.partner.logo}
                                    width={220}
                                    height={220}
                                    crop="fit"
                                />
                            </div>
                        )}
                        <Divider sm />
                        <span className={styles.headerTitle}>
                            {challenge.name}
                        </span>
                    </div>
                </HeroImage>
                <SingleColumnSection>
                    <Markdown
                        source={challenge.description}
                        className={styles.markdown}
                    />
                </SingleColumnSection>
                {challenge.videoLink ? (
                    <SingleColumnSection>
                        <Markdown
                            source={challenge.videoLink}
                            className={styles.markdown}
                        />
                        <Divider sm />
                    </SingleColumnSection>
                ) : null}
                <SingleColumnSection></SingleColumnSection>
                <Divider sm />
                <BasicSection title={getText('challengePageWhatWeBring')}>
                    <Markdown
                        source={challenge.whatWeBring}
                        className={styles.markdown}
                    />
                    {challenge.extraDetails && (
                        <React.Fragment>
                            <Divider sm />
                            <Markdown
                                source={challenge.extraDetails}
                                className={styles.markdown}
                            />
                        </React.Fragment>
                    )}
                </BasicSection>
                <Divider sm />
                <BasicSection title={getText('challengeProblemsTitle')}>
                    <Markdown
                        source={challenge.problems}
                        className={styles.markdown}
                    />
                </BasicSection>
                <Divider sm />
                <BasicSection title={getText('challengeJudgingTitle')}>
                    <Markdown
                        source={challenge.judging}
                        className={styles.markdown}
                    />
                </BasicSection>
                <Divider sm />
                <BasicSection title={getText('challengePrizeTitle')}>
                    <Markdown
                        source={challenge.prize}
                        className={styles.markdown}
                    />
                </BasicSection>
                <Divider sm />
                <BasicSection title={getText('challengeAboutTitle')}>
                    <Markdown
                        source={challenge.partner.about}
                        className={styles.markdown}
                    />
                </BasicSection>
                <Divider sm />

                <div className={styles.ChallengePagePrevNext}>
                    {previousChallenge ? (
                        <Link
                            to={'/challenges/' + previousChallenge.slug}
                            className={styles.ChallengePagePrevious}
                        >
                            {`< ${previousChallenge.name}`}
                        </Link>
                    ) : null}

                    <Divider sm />

                    {nextChallenge ? (
                        <Link
                            to={'/challenges/' + nextChallenge.slug}
                            className={styles.ChallengePageNext}
                        >
                            {`${nextChallenge.name} >`}
                        </Link>
                    ) : null}
                </div>

                <Divider mlg />
                <SingleColumnSection
                    title={getText('homePageTracksTitle')}
                    subtitle={getText('homePageTracksSubtitle')}
                />
                <TracksGrid />
                <Divider md />
            </Page>
        );
    }
}

/*  const challengesSorted = challenges.sort((a, b) =>
        a.priority > b.priority ? 1 : -1
    ); 
*/

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    const { slug } = match.params;
    //Get all challenges
    const tracks = DynamicSelectors.tracks(state);
    const challenges = DynamicSelectors.challenges(state);
    /*  const challenges = [];
    const SortTracks = tracks => {
        return challenges.push(
            tracks.map(track => {
                return track.challenges.sort((a, b) =>
                    a.priority > b.priority ? 1 : -1
                );
            })
        );
    }; */
    /*  const listOfChallenges = [];
    const challenges = () => {
        return mapChallengesFromTracks;
    }; */

    /*    const SortChallenges = () => {};
    const mapChallengesFromTracks = tracks.map(track => {
        const challengesSorted = track.challenges.sort((a, b) =>
            a.priority > b.priority ? 1 : -1
        );

        return listOfChallenges.concat(challengesSorted);
    });

    const challengesList = listOfChallenges.push(mapChallengesFromTracks);
 */
    //See if challenge with the same slug (eg. /challenge-one) exists and returns its index
    const challengeIndex = findIndex(challenges, c => {
        return c.slug.trim() === slug.trim();
    });

    //get challenge from challenges by using challengeIndex to get the index
    const challenge = challenges[challengeIndex];
    //count challenges
    const challengeCount = challenges.length;

    //If current challengeIndex -1 = 0 return null, otherwise return current challenge -1
    const previousChallenge =
        challengeIndex >= 1 ? challenges[challengeIndex - 1] : null;

    //If current challengeIndex +1 = more than challengeLenght return null, otherwise return current challenge +1
    const nextChallenge =
        challengeIndex <= challengeCount - 1
            ? challenges[challengeIndex + 1]
            : null;

    //Returns the values
    return {
        previousChallenge: previousChallenge,
        nextChallenge: nextChallenge,
        challenge: challenge,
        getText: StaticSelectors.buildGetText(state)
        //SortChallenges: SortChallenges()
    };
};

export default connect(mapStateToProps)(ChallengePage);
