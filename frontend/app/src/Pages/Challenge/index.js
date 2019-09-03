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
    render() {
        console.log('GET TEXT', this.props.getText('challengePageWhatWeBring'));
        const { challenge, previousChallenge, nextChallenge, getText } = this.props;

        console.log('THIS PROPS', this.props);

        if (!challenge) {
            return <NotFoundPage />;
        }

        return (
            <Page
                className="ChallengePage"
                pageTitle={challenge.name}
                metaDesc={challenge.description}
                ogImageUrl={challenge.track.headerImage ? challenge.track.headerImage.url : null}
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
                        <span className={styles.headerTitle}>{challenge.name}</span>
                    </div>
                </HeroImage>
                <SingleColumnSection>
                    <Markdown source={challenge.description} className={styles.markdown} />
                </SingleColumnSection>
                {challenge.videoLink ? (
                    <SingleColumnSection>
                        <Markdown source={challenge.videoLink} className={styles.markdown} />
                        <Divider md />
                    </SingleColumnSection>
                ) : null}
                <SingleColumnSection></SingleColumnSection>
                <BasicSection title={getText('challengePageWhatWeBring')}>
                    <Markdown source={challenge.whatWeBring} className={styles.markdown} />
                    {challenge.extraDetails && (
                        <React.Fragment>
                            <Divider md />
                            <Markdown source={challenge.extraDetails} className={styles.markdown} />
                        </React.Fragment>
                    )}
                </BasicSection>
                <Divider md />
                <BasicSection title={getText('challengeProblemsTitle')}>
                    <Markdown source={challenge.problems} className={styles.markdown} />
                </BasicSection>
                <Divider md />
                <BasicSection title={getText('challengeJudgingTitle')}>
                    <Markdown source={challenge.judging} className={styles.markdown} />
                </BasicSection>
                <Divider md />
                <BasicSection title={getText('challengePrizeTitle')}>
                    <Markdown source={challenge.prize} className={styles.markdown} />
                </BasicSection>
                <Divider md />
                <BasicSection title={getText('challengeAboutTitle')}>
                    <Markdown source={challenge.partner.about} className={styles.markdown} />
                </BasicSection>
                <Divider md />

                <div className={styles.ChallengePagePrevNext}>
                    {previousChallenge ? (
                        <Link to={'/challenges/' + previousChallenge.slug} className={styles.ChallengePagePrevious}>
                            {`< ${previousChallenge.name}`}
                        </Link>
                    ) : null}

                    <Divider sm />

                    {nextChallenge ? (
                        <Link to={'/challenges/' + nextChallenge.slug} className={styles.ChallengePageNext}>
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
    const { slug } = match.params;
    //Get all challenges
    const challenges = DynamicSelectors.challenges(state);

    //See if challenge with the same slug (eg. /challenge-one) exists
    const challengeIndex = findIndex(challenges, c => {
        return c.slug.trim() === slug.trim();
    });
    const challenge = challenges[challengeIndex];
    const challengeCount = challenges.length;

    const previousChallenge = challengeIndex >= 1 ? challenges[challengeIndex - 1] : null;
    const nextChallenge = challengeIndex <= challengeCount - 1 ? challenges[challengeIndex + 1] : null;

    //Returns the values
    return {
        previousChallenge: previousChallenge,
        nextChallenge: nextChallenge,
        challenge: challenge,
        getText: StaticSelectors.buildGetText(state)
    };
};

export default connect(mapStateToProps)(ChallengePage);
