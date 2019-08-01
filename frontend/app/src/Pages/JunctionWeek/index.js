import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import Page from '../PageHOC';

import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';

import DatesGrid from '../../components/DatesGrid';
import ButtonLink from '../../components/ButtonLink';
import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import NewsLetterForm from '../../components/NewsLetterForm';

class JunctionWeekPage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page
                className="JunctionWeekPage"
                pageTitle="Junction Week"
                metaDesc={getText('junctionWeekPageHeaderContent')}
                ogImage={getMedia('junctionWeekPageHeaderImage')}
            >
                <HeroImage
                    image={getMedia('junctionWeekPageHeaderImage')}
                    alt="Header image"
                >
                    <BasicHeader
                        title={getText('junctionWeekPageHeaderTitle')}
                        body={getText('junctionWeekPageHeaderContent')}
                    />
                </HeroImage>

                <BasicSection
                    title={getText('junctionWeekPageWeekTitle')}
                    subtitle={getText('junctionWeekPageWeekSubtitle')}
                >
                    <DatesGrid type="junction" />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('junctionWeekPageTerminalTitle')}
                    subtitle={getText('junctionWeekPageTerminalSubtitle')}
                >
                    <Markdown
                        source={getText('junctionWeekPageTerminalContent')}
                    />
                    <ButtonLink
                        text={getText('junctionWeekPageTerminalButton')}
                        link={getText('junctionWeekPageTerminalButtonLink')}
                        size="sm"
                        color="purple"
                        align="left"
                    />
                </BasicSection>
                <BasicSection
                    title={getText('junctionWeekPageHeltechTitle')}
                    subtitle={getText('junctionWeekPageHeltechSubtitle')}
                >
                    <Markdown
                        source={getText('junctionWeekPageHeltechContent')}
                    />
                    <ButtonLink
                        text={getText('junctionWeekPageHeltechButton')}
                        link={getText('junctionWeekPageHeltechButtonLink')}
                        size="sm"
                        align="left"
                    />
                </BasicSection>
                <BasicSection
                    title={getText('junctionWeekPage2019Title')}
                    subtitle={getText('junctionWeekPage2019Subtitle')}
                >
                    <Markdown source={getText('junctionWeekPage2019Content')} />
                    <ButtonLink
                        text={getText('junctionWeekPage2019Button')}
                        link={getText('junctionWeekPage2019ButtonLink')}
                        size="sm"
                        align="left"
                    />
                </BasicSection>
                <BasicSection
                    title={getText('junctionWeekPageElseTitle')}
                    subtitle={getText('junctionWeekPageElseSubtitle')}
                >
                    <Markdown source={getText('junctionWeekPageElseContent')} />
                    <ButtonLink
                        text={getText('junctionWeekPageElseButton')}
                        link={getText('junctionWeekPageElseButtonLink')}
                        size="sm"
                        align="left"
                        type="mainsite"
                    />
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

export default connect(mapStateToProps)(JunctionWeekPage);
