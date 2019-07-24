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

class ChallengesPage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page className="ChallengesPage">
                <HeroImage image={getMedia('challengesPageHeaderImage')}>
                    <BasicHeader
                        title={getText('challengesPageHeaderTitle')}
                        body={getText('challengesHeaderContent')}
                    />
                </HeroImage>
                <SingleColumnSection
                    title={getText('challengesPageTracksTitle')}
                    subtitle={getText('challengesPageTracksSubtitle')}
                />
                <TracksGrid />
                <Divider md />
                <ChallengesGrid />
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

export default connect(
    mapStateToProps,
    { updateStaticContent }
)(ChallengesPage);
