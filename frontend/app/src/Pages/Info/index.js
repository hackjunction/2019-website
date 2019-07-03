import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { updateStaticContent } from '../../redux/staticcontent/actions';
import * as ContentSelectors from '../../redux/staticcontent/selectors';

import Page from '../PageHOC';

import HeroImage from '../../components/HeroImage';
import HeroCTA from '../../components/HeroCTA';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import FaqGrid from '../../components/FaqGrid';
import SingleColumnSection from '../../components/SingleColumnSection';

class InfoPage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page className="InfoPage">
                <HeroImage image={getMedia('infoPageHeaderImage')}>
                    <HeroCTA
                        image={getMedia('infoPageHeroCtaLogo')}
                        subtitle={getText('infoPageHeroCtaSubtitle')}
                        ctaText={getText('infoPageHeroCtaText')}
                        ctaLink={getText('infoPageHeroCtaLink')}
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
                    title={getText('infoPageTracksTitle')}
                    subtitle={getText('infoPageTracksSubtitle')}
                >
                    <Markdown source={getText('infoPageTracksContent')} />
                    <button className="InfoPage-tracksButton">
                        {getText('infoPageTracksButton')}
                    </button>
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
)(InfoPage);
