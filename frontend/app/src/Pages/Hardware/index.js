import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import Page from '../PageHOC';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';

import SingleColumnSection from '../../components/SingleColumnSection';
import VerticalSection from '../../components/VerticalSection';
import VerticalText from '../../components/VerticalText';

class HardwarePage extends PureComponent {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page
                className="HardwarePage"
                pageTitle="Hardware"
                metaDesc={getText('hardwarePageHeaderContent')}
                ogImageUrl={getMedia('hardwarePageHeaderImage').url}
            >
                <HeroImage image={getMedia('hardwarePageHeaderImage')}>
                    <BasicHeader
                        title={getText('hardwarePageHeaderTitle')}
                        body={getText('hardwarePageHeaderContent')}
                    />
                </HeroImage>
                <SingleColumnSection
                    title={getText('hardwarePageSection1Title')}
                    subtitle={getText('hardwarePageSection1Subtitle')}
                />
                <VerticalSection>
                    <VerticalText
                        title={getText('hardwarePageVerticalLeftTitle')}
                        content={getText('hardwarePageVerticalLeftContent')}
                    />
                    <VerticalText
                        title={getText('hardwarePageVerticalMiddleTitle')}
                        content={getText('hardwarePageVerticalMiddleContent')}
                    />
                    <VerticalText
                        title={getText('hardwarePageVerticalRightTitle')}
                        content={getText('hardwarePageVerticalRightContent')}
                    />
                </VerticalSection>
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
export default connect(mapStateToProps)(HardwarePage);
