import React, { PureComponent } from 'react';
import styles from './style.module.scss';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { find } from 'lodash-es';

import NotFoundPage from '../NotFound';

import Page from '../PageHOC';

import HeroImage from '../../components/HeroImage';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import Divider from '../../components/Divider';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import HeaderImage from '../../components/HeaderImage';

import * as DynamicSelectors from '../../redux/dynamiccontent/selectors';
import * as StaticSelectors from '../../redux/staticcontent/selectors';

class ChallengePage extends PureComponent {
    render() {
        const {
            challenge,
            previousChallenge,
            nextChallenge,
            getText
        } = this.props;

        if (!challenge) {
            return <NotFoundPage />;
        }

        return (
            <Page
                className="ChallengePage"
                pageTitle={challenge.name}
                metaDesc={challenge.description}
                ogImageUrl={challenge.headerImage.url}
            >
                <HeroImage image={challenge.headerImage}>
                    <HeaderImage
                        title={challenge.name}
                        body={challenge.headerContent}
                        image={challenge.partner.logo}
                    />
                </HeroImage>

                {challenge.videoLink ? (
                    <SingleColumnSection>
                        <Markdown source={challenge.videoLink} />
                        <Divider md />
                    </SingleColumnSection>
                ) : null}
                <BasicSection title={getText('challengeDescriptionTItle')}>
                    <Markdown source={challenge.description} />
                </BasicSection>
                <BasicSection title={getText('challengeWhatWeBringTitle')}>
                    <Markdown source={challenge.whatWeBring} />
                </BasicSection>

                <Divider md />
                {challenge.extraDetails ? (
                    <BasicSection title={getText('challengeExtraTitle')}>
                        <Markdown source={challenge.extraDetails} />
                    </BasicSection>
                ) : null}
                <Divider md />

                <BasicSection title={getText('challengeProblemsTitle')}>
                    <Markdown source={challenge.problems} />
                </BasicSection>

                <Divider md />

                <BasicSection title={getText('challengeJudgingTitle')}>
                    <Markdown source={challenge.judging} />
                </BasicSection>

                <Divider md />

                <BasicSection title={getText('challengePrizeTitle')}>
                    <Markdown source={challenge.prize} />
                </BasicSection>

                <Divider md />

                <BasicSection title={getText('challengeAboutTitle')}>
                    <Markdown source={challenge.partner.about} />
                </BasicSection>
                <Divider md />

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

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;

    //Get all challenges
    const challenges = DynamicSelectors.challenges(state);

    //See if challenge with the same slug (eg. /challenge-one) exists
    const challenge = find(challenges, c => c.slug === match.params.slug);

    //Checks the index of current challenge in challenges.
    const challengeIndex = parseInt(challenges.indexOf(challenge));

    let previousChallenge = null;
    let nextChallenge = null;

    //If current challenge index + 1 is less or equal to amount of challenges, set next challenge button
    if (challengeIndex + 1 <= challenges.length) {
        nextChallenge = challenges[challengeIndex + 1];
    }

    //If current challenge index -1 is more than or equal to 0, set previous challenge button
    if (challengeIndex - 1 >= 0) {
        previousChallenge = challenges[challengeIndex - 1];
    }

    //Returns the values
    return {
        previousChallenge: previousChallenge,
        nextChallenge: nextChallenge,
        challenge: challenge,
        getText: StaticSelectors.buildGetText(state)
    };
};

export default connect(mapStateToProps)(ChallengePage);
