import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import Page from '../PageHOC';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import Divider from '../../components/Divider';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import SingleColumnSection from '../../components/SingleColumnSection';

class CommunityChallengePage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page
                className="CommunityChallengePage"
                pageTitle="Community Challenge 2019"
                metaDesc={getText('communityChallengeHeaderContent')}
                ogImageUrl={getMedia('communityChallengeHeaderImage').url}
            >
                <HeroImage image={getMedia('communityChallengeHeaderImage')}>
                    <BasicHeader
                        title={getText('communityChallengeHeaderTitle')}
                        body={getText('communityChallengeHeaderContent')}
                    />
                </HeroImage>

                <SingleColumnSection
                    title={getText('communityChallengeSection1Title')}
                >
                    <Markdown
                        source={getText('communityChallengeSection1Body')}
                    />
                </SingleColumnSection>
                <Markdown md />
                <BasicSection
                    title={getText('communityChallengeSection2Title')}
                    subtitle={getText('communityChallengeSection2Subtitle')}
                >
                    <Markdown
                        source={getText('communityChallengeSection2Body')}
                    />
                </BasicSection>
                <Markdown md />
                <BasicSection
                    title={getText('communityChallengeSection3Title')}
                    subtitle={getText('communityChallengeSection3Subtitle')}
                >
                    <Markdown
                        source={getText('communityChallengeSection3Body')}
                    />
                </BasicSection>
                <Markdown md />
                <BasicSection
                    title={getText('communityChallengeSection4Title')}
                    subtitle={getText('communityChallengeSection4Subtitle')}
                >
                    <Markdown
                        source={getText('communityChallengeSection4Body')}
                    />
                </BasicSection>
                <Markdown md />
                <BasicSection
                    title={getText('communityChallengeSection5Title')}
                >
                    <Markdown
                        source={getText('communityChallengeSection5Body')}
                    />
                </BasicSection>
                <BasicSection
                    title={getText('communityChallengeSection6Title')}
                >
                    <Markdown
                        source={getText('communityChallengeSection6Body')}
                    />
                </BasicSection>
                <BasicSection
                    title={getText('communityChallengeSection7Title')}
                >
                    <Markdown
                        source={getText('communityChallengeSection7Body')}
                    />
                </BasicSection>
                <BasicSection
                    title={getText('communityChallengeSection8Title')}
                >
                    <Markdown
                        source={getText('communityChallengeSection8Body')}
                    />
                </BasicSection>
                <BasicSection
                    title={getText('communityChallengeSection9Title')}
                >
                    <Markdown
                        source={getText('communityChallengeSection9Body')}
                    />
                </BasicSection>
                <Divider md />
            </Page>
        );
    }
}

const mapStateToProps = state => ({
    getText: ContentSelectors.buildGetText(state),
    getMedia: ContentSelectors.buildGetMedia(state)
});

export default connect(mapStateToProps)(CommunityChallengePage);
