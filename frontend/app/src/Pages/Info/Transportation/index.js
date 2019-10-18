import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.module.scss';

import config from '../../../config';

import * as ContentSelectors from '../../../redux/staticcontent/selectors';

import Page from '../../PageHOC';

import HeroImage from '../../../components/HeroImage';
import Divider from '../../../components/Divider';
import BasicHeader from '../../../components/BasicHeader';
import BasicSection from '../../../components/BasicSection';
import Markdown from '../../../components/Markdown';
import SingleColumnSection from '../../../components/SingleColumnSection';
import FaqGrid from '../../../components/FaqGrid';
import NewsLetterForm from '../../../components/NewsLetterForm';

class TransportationPage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page
                className="TransportationPage"
                pageTitle="Transportation."
                metaDesc={getText('transportationPageHeaderContent')}
                ogImageUrl={getMedia('transportationPageHeaderImage').url}
            >
                <HeroImage image={getMedia('transportationPageHeaderImage')}>
                    <BasicHeader
                        title={getText('transportationPageHeaderTitle')}
                        body={getText('transportationPageHeaderContent')}
                    />
                </HeroImage>

                <SingleColumnSection
                    title={getText('transportationPageAddressTitle')}
                    subtitle={getText('transportationPageAddress')}
                />
                <Divider md />
                <SingleColumnSection
                    title={getText('transportationPageFaqTitle')}
                    subtitle={getText('transportationPageFaqSubtitle')}
                />
                {config.IS_DEBUG ? (
                    <div>
                        <h3> FaQ's where IsTransportationFaq = true</h3>
                        <p>(this text isn't visible on the live pages)</p>
                    </div>
                ) : null}
                <FaqGrid type="transport" />
                <Divider md />
                <BasicSection
                    title={getText('transportationPageRegistrationTitle')}
                    subtitle={getText('transportationPageRegistrationSubtitle')}
                >
                    <Markdown
                        source={getText(
                            'transportationPageRegistrationContent'
                        )}
                    />
                </BasicSection>
                <Divider md />
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

export default connect(mapStateToProps)(TransportationPage);
