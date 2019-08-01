import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import Page from '../PageHOC';

import DatesGrid from '../../components/DatesGrid';
import HeroImage from '../../components/HeroImage';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import FaqGrid from '../../components/FaqGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import ButtonLink from '../../components/ButtonLink';
import BasicHeader from '../../components/BasicHeader';
import NewsLetterForm from '../../components/NewsLetterForm';

class InfoPage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page
                className="InfoPage"
                pageTitle="Information"
                metaDesc={getText('infoPageHeaderContent')}
                ogImage={getMedia('infoPageHeaderImage')}
            >
                <HeroImage image={getMedia('infoPageHeaderImage')}>
                    <BasicHeader
                        title={getText('infoPageHeaderTitle')}
                        body={getText('infoPageHeaderContent')}
                    />
                </HeroImage>

                <BasicSection
                    title={getText('infoPageApplyTitle')}
                    subtitle={getText('infoPageApplySubtitle')}
                >
                    <Markdown source={getText('infoPageApplyContent')} />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('infoPageJourneyTitle')}
                    subtitle={getText('infoPageJourneySubtitle')}
                >
                    <DatesGrid type="frontPage" />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('infoPageTracksTitle')}
                    subtitle={getText('infoPageTracksSubtitle')}
                >
                    <Markdown source={getText('infoPageTracksContent')} />
                    <ButtonLink
                        text={getText('infoPageTracksButton')}
                        link={getText('infoPageTracksButtonLink')}
                        color="purple"
                        size="md"
                        align="left"
                    />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('infoPageLiveTitle')}
                    subtitle={getText('infoPageLiveSubtitle')}
                >
                    <Markdown source={getText('infoPageLiveContent')} />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('infoPageRulesTitle')}
                    subtitle={getText('infoPageRulesSubtitle')}
                >
                    <Markdown source={getText('infoPageRulesContent')} />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('infoPageViolationTitle')}
                    subtitle={getText('infoPageViolationSubtitle')}
                >
                    <Markdown source={getText('infoPageViolationContent')} />
                </BasicSection>
                <Divider md />
                <SingleColumnSection
                    title={getText('faqTitle')}
                    subtitle={getText('faqSubtitle')}
                >
                    <Divider sm />
                    <FaqGrid />
                </SingleColumnSection>
                <Divider lg />
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

export default connect(mapStateToProps)(InfoPage);
