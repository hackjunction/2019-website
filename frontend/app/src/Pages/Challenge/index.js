import React, { PureComponent } from 'react';
import './style.module.scss';

import { connect } from 'react-redux';
import { find } from 'lodash-es';

import NotFoundPage from '../NotFound';

import Page from '../PageHOC';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import Divider from '../../components/Divider';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import ButtonLink from '../../components/ButtonLink';

import * as DynamicSelectors from '../../redux/dynamiccontent/selectors';
import * as StaticSelectors from '../../redux/staticcontent/selectors';

class ChallengePage extends PureComponent {
    render() {
        const { challenge, getText } = this.props;

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
                    <BasicHeader
                        title={challenge.name}
                        body={challenge.description}
                    />
                </HeroImage>

                {challenge.videoLink ? (
                    <SingleColumnSection>
                        <Markdown source={challenge.videoLink} />
                        <Divider md />
                    </SingleColumnSection>
                ) : null}

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

                <ButtonLink>previous</ButtonLink>
                <ButtonLink>Next</ButtonLink>
                <Divider md />
                <TracksGrid />
                <Divider md />
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    const challenges = DynamicSelectors.challenges(state);

    return {
        challenge: find(challenges, c => c.slug === match.params.slug),
        getText: StaticSelectors.buildGetText(state)
    };
};

export default connect(mapStateToProps)(ChallengePage);
