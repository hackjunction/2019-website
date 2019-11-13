import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as styles from './style.module.scss';

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
import VerticalSection from '../../components/VerticalSection';
import VerticalText from '../../components/VerticalText';
import Schedules from '../../components/Schedules';
import OpeningHours from '../../components/Schedules/OpeningHours';
import FaqGrid from '../../components/FaqGrid';

import Page from '../PageHOC';

class LivePage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page
                className='LivePage'
                pageTitle='Live.'
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
                <div id='schedule' />
                <Divider md />

                <SingleColumnSection
                    title={getText('livePageSection2Title')}
                    subtitle={getText('livePageSection2Subtitle')}
                />

                <BasicSection
                    title={getText('livePageScheduleFridayTitle')}
                    subtitle={getText('livePageScheduleFridaySubtitle')}
                >
                    <Schedules date='friday' />
                </BasicSection>
                <BasicSection
                    title={getText('livePageScheduleSaturdayTitle')}
                    subtitle={getText('livePageScheduleSaturdaySubtitle')}
                >
                    <Schedules date='saturday' />
                </BasicSection>
                <BasicSection
                    title={getText('livePageScheduleSundayTitle')}
                    subtitle={getText('livePageScheduleSundaySubtitle')}
                >
                    <Schedules date='sunday' />
                </BasicSection>
                <BasicSection
                    title={getText('livePageScheduleOthersTitle')}
                    subtitle={getText('livePageScheduleOthersSubtitle')}
                >
                    <OpeningHours />
                </BasicSection>
                <Divider lg />
                <BasicSection
                    title={getText('livePageSection3Title')}
                    subtitle={getText('livePageSection3Subtitle')}
                >
                    <Markdown source={getText('livePageSection3Content')} />
                    <ButtonLink
                        text={getText('livePageSection3Button')}
                        link={getText('livePageSection3ButtonLink')}
                        size='sm'
                        align='left'
                    />
                </BasicSection>
                <Divider md />
                <SingleColumnSection
                    title={getText('livePageSection4Title')}
                    subtitle={getText('livePageSection4Subtitle')}
                />
                <VerticalSection>
                    <VerticalText
                        title={getText('livePageMenu1Title')}
                        content={getText('livePageMenu1Content')}
                    />
                    <VerticalText
                        title={getText('livePageMenu2Title')}
                        content={getText('livePageMenu2Content')}
                    />
                    <VerticalText
                        title={getText('livePageMenu3Title')}
                        content={getText('livePageMenu3Content')}
                    />
                </VerticalSection>

                <Divider md />
                <BasicSection
                    title={getText('livePageSection5Title')}
                    subtitle={getText('livePageSection5Subtitle')}
                >
                    <Markdown source={getText('livePageSection5Content')} />
                    <ButtonLink
                        text={getText('livePageSection5Button')}
                        link={'livePageSection5ButtonLink'}
                        align='left'
                        size='sm'
                    />
                </BasicSection>
                <Divider md />
                <SingleColumnSection>
                    <Image
                        className={styles.LiveImage}
                        image={getMedia('livePageVenueMap')}
                    />
                </SingleColumnSection>

                <Divider md />
                <BasicSection
                    title={getText('livePageSection6Title')}
                    subtitle={getText('livePageSection6Subtitle')}
                >
                    <Markdown source={getText('livePageSection6Content')} />
                </BasicSection>

                <Divider lg />
                <SingleColumnSection
                    title={getText('faqTitle')}
                    subtitle={getText('faqSubtitle')}
                >
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
export default connect(mapStateToProps)(LivePage);
