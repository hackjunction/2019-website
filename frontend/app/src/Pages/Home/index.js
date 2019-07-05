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
import FaqGrid from '../../components/FaqGrid';
import DatesGrid from '../../components/DatesGrid';
import PartnersGrid from '../../components/PartnersGrid';
//import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';

class HomePage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page className="HomePage">
                <HeroImage image={getMedia('homePageHeaderImage')}>
                    <HeroCTA
                        subtitle={getText('homePageHeroCtaSubtitle')}
                        ctaText={getText('homePageHeroCtaText')}
                        ctaLink={getText('homePageHeroCtaLink')}
                    />
                </HeroImage>
                <button className="HomePage-applyButton">
                    {getText('homePageApplyButton')}
                </button>
                <Divider lg />
                <div className="HomePage-buttons">
                    <button className="HomePage-infoButton">
                        {getText('homePageInfoButton')}
                    </button>
                    <button className="HomePage-volunteerButton">
                        {getText('homePageVolunteerButton')}
                    </button>
                </div>
                <Divider md />
                <SingleColumnSection title={getText('junctionComingSlogan')} />

                <BasicSection
                    title={getText('junctionMainTitle')}
                    subtitle={getText('junctionMainSubtitle')}
                >
                    <span className="HomePage-introText">
                        {getText('homePageIntroText')}
                    </span>
                    <StatBlocks />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('homePageJourneyTitle')}
                    subtitle={getText('homePageJourneySubtitle')}
                >
                    <DatesGrid />
                </BasicSection>
                <Divider lg />
                <SingleColumnSection
                    title={getText('tracksTitle')}
                    subtitle={getText('tracksSubtitle')}
                />
                <TracksGrid />
                <Divider md />
                <SingleColumnSection>
                    <Markdown source={getText('homePageVideoLink')} />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection
                    title={getText('faqTitle')}
                    subtitle={getText('faqSubtitle')}
                >
                    <Divider sm />
                    <FaqGrid />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection
                    title={getText('partnersTitle')}
                    subtitle={getText('partnersSubtitle')}
                >
                    <Divider sm />
                    <PartnersGrid />
                    <Divider sm />
                    <button className="HomePage-partnerInfoButton">
                        {getText('homePagePartnerInfoButton')}
                    </button>
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
