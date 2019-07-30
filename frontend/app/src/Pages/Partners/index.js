import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import Divider from '../../components/Divider';
import SingleColumnSection from '../../components/SingleColumnSection';
import PartnersGrid from '../../components/PartnersGrid';
import ButtonLink from '../../components/ButtonLink';
import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';

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
                    >
                        <ButtonLink
                            text={getText('partnerPageHeaderButton')}
                            type="anchor"
                            link="#contact"
                        />
                    </BasicHeader>
                </HeroImage>
                <BasicSection
                    title={getText('partnerPageInfoTitle')}
                    subtitle={getText('partnerPageInfoSubtitle')}
                >
                    <Markdown source={getText('partnerPageInfoContent')} />
                </BasicSection>
                <Divider md />

                <SingleColumnSection
                    title={getText('partnerPageTitle')}
                    subtitle={getText('partnerPageSubtitle')}
                >
                    <PartnersGrid />
                </SingleColumnSection>
                <div key="contact">paspasp</div>
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
