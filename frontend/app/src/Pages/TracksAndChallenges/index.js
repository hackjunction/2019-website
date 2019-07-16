import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from '../PageHOC';

import './style.scss';

import { updateStaticContent } from '../../redux/staticcontent/actions';
import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import Divider from '../../components/Divider';
import ChallengesGrid from '../../components/ChallengesGrid';

class TracksAndChallengesPage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page className="TracksAndChallengesPage">
                <HeroImage image={getMedia('tcPageHeaderImage')}>
                    <BasicHeader
                        title={getText('tcPageHeaderTitle')}
                        body={getText('tcHeaderContent')}
                    />
                </HeroImage>
                <SingleColumnSection
                    title={getText('tcPageTracksTitle')}
                    subtitle={getText('tcPageTracksSubtitle')}
                />
                <TracksGrid />
                <Divider md />
                <ChallengesGrid />
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

export default connect(
    mapStateToProps,
    { updateStaticContent }
)(TracksAndChallengesPage);
