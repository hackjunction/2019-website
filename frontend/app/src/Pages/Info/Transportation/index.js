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
import NewsLetterForm from '../../../components/NewsLetterForm';

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
                <Divider md />
                <SingleColumnSection
                    title={getText('transportationPageFaqTitle')}
                    subtitle={getText('transportationPageFaqSubtitle')}
                />
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
