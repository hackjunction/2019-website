import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.module.scss';

import * as ContentSelectors from '../../../redux/staticcontent/selectors';

import Page from '../../PageHOC';

import HeroImage from '../../../components/HeroImage';
import Divider from '../../../components/Divider';
import BasicHeader from '../../../components/BasicHeader';
import BasicSection from '../../../components/BasicSection';
import Markdown from '../../../components/Markdown';
import SingleColumnSection from '../../../components/SingleColumnSection';
import FaqGrid from '../../../components/FaqGrid';

class TransportationPage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page
                className="TransportationPage"
                pageTitle="Transportation."
                metaDesc={getText('transportationPageHeaderContent')}
                ogImage={getMedia('transportationPageHeaderImage')}
            >
                <HeroImage image={getMedia('transportationPageHeaderImage')}>
                    <BasicHeader
                        title={getText('transportationPageHeaderTitle')}
                        body={getText('transportationPageHeaderContent')}
                    />
                </HeroImage>

                <SingleColumnSection
                    title={getText('transportationPageAddress')}
                />
                <Divider sm />
                <SingleColumnSection
                    title={getText('transportationPageFaqTitle')}
                    subtitle={getText('transportationPageFaqSubtitle')}
                />
                <FaqGrid type="transport" />
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

export default connect(mapStateToProps)(TransportationPage);
