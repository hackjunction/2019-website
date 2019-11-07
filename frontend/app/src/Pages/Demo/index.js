import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './style.module.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import Page from '../PageHOC';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import Divider from '../../components/Divider';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import ButtonLink from '../../components/ButtonLink';
import SingleColumnSection from '../../components/SingleColumnSection';
import Image from '../../components/Image';
import Guidelines from '../../components/Guidelines';

class DemoPage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page
                className="DemoPage"
                pageTitle="Demo"
                metaDesc={getText('demoPageHeaderContent')}
                ogImageUrl={getMedia('demoPageHeaderImage').url}
            >
                <HeroImage image={getMedia('demoPageHeaderImage')}>
                    <BasicHeader
                        title={getText('demoPageHeaderTitle')}
                        body={getText('demoPageHeaderContent')}
                    />
                </HeroImage>
                <Divider md />
                <BasicSection
                    title={getText('demoPageSection1Title')}
                    subtitle={getText('demoPageSection1Subtitle')}
                >
                    <Markdown source={getText('demoPageSection1Content')} />
                    <ButtonLink
                        text={getText('demoPageSection1Button')}
                        link={getText('demoPageSection1ButtonLink')}
                        size="sm"
                        align="left"
                    />
                </BasicSection>
                <Divider md />
                <SingleColumnSection>
                    <Image
                        className={styles.DemoImage}
                        image={getMedia('demoPageImage1')}
                    />
                </SingleColumnSection>

                <Divider md />
                <BasicSection
                    title={getText('demoPageSection2Title')}
                    subtitle={getText('demoPageSection2Subtitle')}
                >
                    <Markdown source={getText('demoPageSection2Content')} />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('demoPageSection3Title')}
                    subtitle={getText('demoPageSection3Subtitle')}
                >
                    <Markdown source={getText('demoPageSection3Content')} />
                </BasicSection>
                <Divider md />
                <SingleColumnSection>
                    <Image
                        className={styles.DemoImage}
                        image={getMedia('demoPageImage2')}
                    />
                </SingleColumnSection>

                <Divider md />
                <SingleColumnSection
                    title={getText('demoPageSection4Title')}
                    subtitle={getText('demoPageSection4Subtitle')}
                />
                <Guidelines />
                <Divider md />
                <BasicSection
                    title={getText('demoPageSection5Title')}
                    subtitle={getText('demoPageSection5Subtitle')}
                >
                    <Markdown source={getText('demoPageSection5Content')} />
                </BasicSection>
                <Divider md />
                <BasicSection
                    title={getText('demoPageSection6Title')}
                    subtitle={getText('demoPageSection6Subtitle')}
                >
                    <Markdown source={getText('demoPageSection6Content')} />
                    <ButtonLink
                        text={getText('demoPageSection6Button')}
                        link={getText('demoPageSection6ButtonLink')}
                        size="sm"
                        align="left"
                        type="mainsite"
                    />
                </BasicSection>
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

export default connect(mapStateToProps)(DemoPage);
