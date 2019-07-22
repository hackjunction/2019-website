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
import ButtonLink from '../../components/ButtonLink';

import Page from '../PageHOC';

class HomePage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page className="HomePage">
                <HeroImage image={getMedia('homePageHeaderImage')}>
                    <HeroCTA
                        subtitle={getText('homePageHeroCtaSubtitle')}
                        image={getMedia('homePageHeroCtaImage')}
                    >
                        <ButtonLink
                            text={getText('homePageApplyButton')}
                            link={getText('homePageApplyButtonLink')}
                            size="lg"
                            color="purple"
                            align="center"
                        />
                    </HeroCTA>
                </HeroImage>
                <h1>Hello</h1>
                <SingleColumnSection center>
                    <ButtonLink
                        text={getText('homePageInfoButton')}
                        link={getText('homePageInfoButtonLink')}
                        color="brown"
                        size="md"
                        align="center"
                    />
                    <ButtonLink
                        text={getText('homePageVolunteerButton')}
                        link={getText('homePageVolunteerButtonLink')}
                    />
                </SingleColumnSection>
                <Divider md />
                <SingleColumnSection title={getText('junctionComingSlogan')} />

                <BasicSection
                    title={getText('junctionMainTitle')}
                    subtitle={getText('junctionMainSubtitle')}
                >
                    <Markdown source={getText('homePageIntroText')} />
                    <StatBlocks />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('homePageJourneyTitle')}
                    subtitle={getText('homePageJourneySubtitle')}
                >
                    <DatesGrid type="frontPage" />
                </BasicSection>
                <Divider lg />
                <SingleColumnSection
                    title={getText('homePageTracksTitle')}
                    subtitle={getText('homePageTracksSubtitle')}
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
                    <ButtonLink
                        text={getText('homePagePartnerInfoButton')}
                        link={getText('homePagePartnerInfoButtonLink')}
                        color="purple"
                        size="md"
                        align="center"
                    />
                </SingleColumnSection>
                <Divider md />
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
