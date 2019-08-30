import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import Page from '../PageHOC';

import Divider from '../../components/Divider';
import HeroImage from '../../components/HeroImage';
import BasicSection from '../../components/BasicSection';
import ContactForm from '../../components/ContactForm';
import BasicHeader from '../../components/BasicHeader';
import JobsGrid from '../../components/JobsGrid';
import Markdown from '../../components/Markdown';
import SingleColumnSection from '../../components/SingleColumnSection';

class JobsPage extends PureComponent {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page
                className="JobsPage"
                pageTitle="Jobs"
                metaDesc={getText('jobsPageHeaderContent')}
                ogImageUrl={getMedia('jobsPageHeaderImage').url}
            >
                <HeroImage image={getMedia('jobsPageHeaderImage')}>
                    <BasicHeader
                        title={getText('jobsPageHeaderTitle')}
                        body={getText('jobsPageHeaderContent')}
                    />
                </HeroImage>
                <Divider sm />
                <BasicSection
                    title={getText('jobsPageSection1Title')}
                    subtitle={getText('jobsPageSection1Subtitle')}
                >
                    <Markdown source={getText('jobsPageSection1Content')} />
                </BasicSection>
                <Divider md />
                <SingleColumnSection
                    title={getText('jobsTitle')}
                    subtitle={getText('jobsSubtitle')}
                >
                    <JobsGrid />
                </SingleColumnSection>

                <Divider md />
                <ContactForm />
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

export default connect(mapStateToProps)(JobsPage);
