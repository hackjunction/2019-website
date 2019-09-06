import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../PageHOC';

import './style.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import Divider from '../../components/Divider';
import ChallengesGrid from '../../components/ChallengesGrid';
import NewsLetterForm from '../../components/NewsLetterForm';

class ChallengesPage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page
                className="ChallengesPage"
                pageTitle="Challenges"
                metaDesc={getText('challengesHeaderContent')}
                ogImageUrl={getMedia('challengesPageHeaderImage').url}
            >
                <HeroImage image={getMedia('challengesPageHeaderImage')}>
                    <BasicHeader
                        title={getText('challengesPageHeaderTitle')}
                        body={getText('challengesHeaderContent')}
                    />
                </HeroImage>
                <SingleColumnSection
                    title={getText('tracksTitle')}
                    subtitle={getText('tracksSubtitle')}
                />
                <TracksGrid smoothScroll={true} />
                <Divider md />
                <ChallengesGrid />
                <Divider md />
                <TracksGrid smoothScroll={true} />
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

export default connect(mapStateToProps)(ChallengesPage);
