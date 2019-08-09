import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import SingleColumnSection from '../../components/SingleColumnSection';
import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import ButtonLink from '../../components/ButtonLink';
import NewsLetterForm from '../../components/NewsLetterForm';
import Image from '../../components/Image';
import EventInfoBlocks from '../../components/EventInfoBlocks';

import Page from '../PageHOC';

class LivePage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page
                className="LivePage"
                pageTitle="Live."
                metaDesc={getText('livePageHeaderContent')}
                ogImageUlr={getMedia('volunteerPageHeaderImage').url}
            >
                <HeroImage image={getMedia('livePageHeaderImage')}>
                    <BasicHeader
                        title={getText('livePageHeaderTitle')}
                        body={getText('livePageHeaderContent')}
                    />
                </HeroImage>
                <BasicSection
                    title={getText('livePageSection1Title')}
                    subtitle={getText('livePageSection1Subtitle')}
                >
                    <EventInfoBlocks />
                </BasicSection>
                <Divider md />
                <SingleColumnSection
                    title={getText('livePageSection2Title')}
                    subtitle={getText('livePageSection2Subtitle')}
                />
                <Divider lg />
                <SingleColumnSection title="Schedule here" />
                <Divider lg />

                <Divider lg />
                <Divider lg />
                <BasicSection
                    title={getText('livePageSection3Title')}
                    subtitle={getText('livePageSection3Subtitle')}
                >
                    <Markdown source={getText('livePageSection3Content')} />
                    <ButtonLink
                        text={'livePageSection3Button'}
                        link={'livePageSection3ButtonLink'}
                        size="sm"
                        align="left"
                    />
                </BasicSection>
                <Divider md />
                <SingleColumnSection
                    title={getText('livePageSection4Title')}
                    subtitle={getText('livePageSection4Subtitle')}
                />
                {/* FOOD MENU HERE */}
                <Divider md />
                <BasicSection
                    title={getText('livePageSection5Title')}
                    subtitle={getText('livePageSection5Subtitle')}
                >
                    <Markdown source={getText('livePageSection5Content')} />
                    <ButtonLink
                        text={getText('livePageSection5Button')}
                        link={'livePageSection5ButtonLink'}
                        align="left"
                        size="sm"
                    />
                </BasicSection>
                <Divider md />
                <SingleColumnSection>
                    <Image image={getMedia('livePageVenueMap')} />
                </SingleColumnSection>

                <Divider md />
                <BasicSection
                    title={getText('livePageSection6Title')}
                    subtitle={getText('livePageSection6Subtitle')}
                >
                    <Markdown source={getText('livePageSection6Content')} />
                </BasicSection>
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
export default connect(mapStateToProps)(LivePage);
