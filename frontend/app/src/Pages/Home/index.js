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
                ogImageUrl={getMedia('homePageHeaderImage').url}
            >
                <HeroImage isVideo>
                    <HeroCTA
                        subtitle={getText('homePageHeroCtaSubtitle')}
                        image={getMedia('homePageHeroCtaImage')}
                    ></HeroCTA>
                </HeroImage>

                <SingleColumnSection title={getText('junctionComingSlogan')} />
                <Divider sm />

                {/* STYLISH CONTAINER */}
                <StylishContainer>
                    <div className={styles.padding}>
                        <BasicSection
                            title={getText('junctionMainTitle')}
                            subtitle={getText('junctionMainSubtitle')}
                        >
                            <Markdown source={getText('homePageIntroText')} />
                        </BasicSection>
                    </div>

                    <Divider lg />
                    <div className={styles.stylishContainer}>
                        <h1 className={styles.stylishContainerTitle}>
                            {getText('homePageReadyTitle')}
                        </h1>
                        {/* <ButtonLink
                            text={getText('homePageApplyButton')}
                            size="lg"
                            type="mainsite"
                            link="https://app.hackjunction.com/events/junction-2019"
                        /> */}
                        <p className={styles.stylishContainerDescription}>
                            {getText('homePageReadyDescription')}
                        </p>
                    </div>
                    <Divider lg />
                    <SingleColumnSection
                        title={getText('tracksTitle')}
                        subtitle={getText('tracksSubtitle')}
                    />
                    <TracksGrid />
                </StylishContainer>

                <Divider lg />
                <Divider md />
                <SingleColumnSection>
                    <Markdown source={getText('homePageVideoLink')} />
                </SingleColumnSection>
                <Divider md />
                <div id="faq" />
                <Divider md />
                <SingleColumnSection
                    title={getText('faqTitle')}
                    subtitle={getText('faqSubtitle')}
                >
                    <Divider sm />
                    <FaqGrid type="" />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection
                    title={getText('partnersTitle')}
                    subtitle={getText('partnersSubtitle')}
                />
                <Divider sm />
                <PartnersGrid type="front" />
                <SingleColumnSection>
                    <ButtonLink
                        text={getText('homePagePartnerInfoButton')}
                        link={getText('homePagePartnerInfoButtonLink')}
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
