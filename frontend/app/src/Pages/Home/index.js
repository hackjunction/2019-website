import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './Home.module.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage';
import HeroCTA from '../../components/HeroCTA';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import FaqGrid from '../../components/FaqGrid';
import PartnersGrid from '../../components/PartnersGrid';
import ButtonLink from '../../components/ButtonLink';
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
                <HeroImage image={getMedia('homePageHeaderImage')} isVideo>
                    <HeroCTA subtitle={getText('homePageHeroCtaSubtitle')} image={getMedia('homePageHeroCtaImage')} />
                </HeroImage>

                <SingleColumnSection title={getText('junctionComingSlogan')} />
                <Divider sm />

                {/* STYLISH CONTAINER */}
                <StylishContainer>
                    <BasicSection title={getText('junctionMainTitle')} subtitle={getText('junctionMainSubtitle')}>
                        <Markdown source={getText('homePageIntroText')} />
                    </BasicSection>
                    <Divider lg />
                    <div className={styles.stylishContainer}>
                        <h1 className={styles.stylishContainerTitle}>{getText('homePageReadyTitle')}</h1>
                        <ButtonLink text={getText('homePageReadyButton')} size="lg" />
                        <p className={styles.stylishContainerDescription}>{getText('homePageReadyDescription')}</p>
                    </div>
                    <Divider lg />
                    <SingleColumnSection
                        title={getText('homePageTracksTitle')}
                        subtitle={getText('homePageTracksSubtitle')}
                    />
                    <TracksGrid />
                </StylishContainer>

                <Divider lg />
                <Divider md />
                <SingleColumnSection>
                    <Markdown source={getText('homePageVideoLink')} />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection title={getText('faqTitle')} subtitle={getText('faqSubtitle')}>
                    <Divider sm />
                    <FaqGrid />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection title={getText('partnersTitle')} subtitle={getText('partnersSubtitle')}>
                    <Divider sm />
                </SingleColumnSection>
                <PartnersGrid type="front" />
                <SingleColumnSection>
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
