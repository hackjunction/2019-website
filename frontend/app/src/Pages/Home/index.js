import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { updateStaticContent } from '../../redux/staticcontent/actions';
import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage';
import HeroCTA from '../../components/HeroCTA';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import StatBlocks from '../../components/StatBlocks';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import Page from '../PageHOC';

class HomePage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page className="HomePage">
                <HeroImage image={getMedia('homePageHeaderImage')}>
                    <HeroCTA
                        image={getMedia('homePageHeroCtaLogo')}
                        subtitle={getText('homePageHeroCtaSubtitle')}
                        ctaText={getText('homePageHeroCtaText')}
                        ctaLink={getText('homePageHeroCtaLink')}
                    />
                </HeroImage>
                <button className="App--main-applyButton">{getText('homePageApplyButton')}</button>
                <Divider lg />
                <div className="App--main-buttons">
                    <button className="App--main-infoButton">{getText('homePageInfoButton')}</button>
                    <button className="App--main-volunteerButton">{getText('homePageVolunteerButton')}</button>
                </div>
                <Divider md />
                <SingleColumnSection title={getText('junctionComingSlogan')} />

                <BasicSection title={getText('junctionMainTitle')} subtitle={getText('junctionMainSubtitle')}>
                    <span className="App--main-introText">{getText('homePageIntroText')}</span>
                    <StatBlocks />
                </BasicSection>
                <Divider md />
                <BasicSection title={getText('homePageJourneyTitle')} subtitle={getText('homePageJourneySubtitle')} />
                <Divider lg />
                <SingleColumnSection title={getText('tracksTitle')} subtitle={getText('tracksSubtitle')} />
                <TracksGrid />
                <Divider md />
                <SingleColumnSection>
                    <Markdown source={getText('homePageVideoLink')} />
                </SingleColumnSection>
                <Divider lg />
            </Page>
        );
    }
}

const mapStateToProps = state => {
    return {
        getText: ContentSelectors.buildGetText(state),
        getMedia: ContentSelectors.buildGetMedia(state)
    };
};

export default connect(
    mapStateToProps,
    { updateStaticContent }
)(HomePage);
