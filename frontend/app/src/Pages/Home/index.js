import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage';
import HeaderVideo from '../../components/HeaderVideo';
import HeroCTA from '../../components/HeroCTA';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import FaqGrid from '../../components/FaqGrid';
import PartnersGrid from '../../components/PartnersGrid';
import ButtonLink from '../../components/ButtonLink';
import AreYouReady from '../../components/AreYouReady';
import NewsLetterForm from '../../components/NewsLetterForm';
import StylishContainer from '../../components/StylishContainer';
import Page from '../PageHOC';

class HomePage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page
                className="HomePage"
                pageTitle="Hack the Future"
                metaDesc={getText('whoAreWeBody')}
                ogImageKey={getMedia('homePageHeaderImage')}
            >
                {/* VIDEO */}
                {/* <HeaderVideo video={getMedia('homePageHeaderVideo')}>
                    <HeroCTA
                        subtitle={getText('homePageHeroCtaSubtitle')}
                        image={getMedia('homePageHeroCtaImage')}
                    >
                        
                    </HeroCTA>
                </HeaderVideo> */}

                {/* IMAGE  */}
                <HeroImage image={getMedia('homePageHeaderImage')}>
                    <HeroCTA
                        subtitle={getText('homePageHeroCtaSubtitle')}
                        image={getMedia('homePageHeroCtaImage')}
                    >
                        {/* <ButtonLink
                            text={getText('homePageApplyButton')}
                            link={getText('homePageApplyButtonLink')}
                            size="fp"
                            color="purple"
                            align="center"
                        /> */}
                    </HeroCTA>
                </HeroImage>

                <SingleColumnSection title={getText('junctionComingSlogan')} />

                <BasicSection
                    title={getText('junctionMainTitle')}
                    subtitle={getText('junctionMainSubtitle')}
                >
                    <Markdown source={getText('homePageIntroText')} />
                </BasicSection>
                <Divider sm />

                {/* STYLISH CONTAINER */}
                <StylishContainer className="HomePage--ready">
                    <span className="HomePage--ready__title">
                        {getText('homePageReadyTitle')}
                    </span>
                </StylishContainer>

                {/*  <AreYouReady
                    title={getText('homePageReadyTitle')}
                    button={getText('homePageReadyButton')}
                    buttonHover={getText('homePageReadyButtonHover')}
                    description={getText('homePageReadyDescription')}
                    link={getText('homePageReadyLink')}
                /> */}
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
                    <PartnersGrid type="front" />
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
                <NewsLetterForm />
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

export default connect(mapStateToProps)(HomePage);
