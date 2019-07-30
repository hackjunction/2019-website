import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import Divider from '../../components/Divider';
import SingleColumnSection from '../../components/SingleColumnSection';
import PartnersGrid from '../../components/PartnersGrid';

import Page from '../PageHOC';

class PartnerPage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page className="PartnerPage">
                <HeroImage image={getMedia('partnerPageHeaderImage')}>
                    <BasicHeader
                        title={getText('partnerPageHeaderTitle')}
                        body={getText('partnerPageHeaderContent')}
                    />
                </HeroImage>
                <Divider sm />
                <SingleColumnSection
                    title={getText('partnerPageTitle')}
                    subtitle={getText('partnerPageSubtitle')}
                >
                    <PartnersGrid />
                </SingleColumnSection>
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

export default connect(mapStateToProps)(PartnerPage);
