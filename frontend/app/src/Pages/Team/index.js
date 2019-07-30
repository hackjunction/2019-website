import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import SingleColumnSection from '../../components/SingleColumnSection';
import TeamMemberGrid from '../../components/TeamMemberGrid';

import Page from '../PageHOC';

class TeamPage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page className="TeamPage">
                <HeroImage image={getMedia('teamPageHeaderImage')}>
                    <BasicHeader
                        title={getText('teamPageHeaderTitle')}
                        body={getText('teamPageHeaderContent')}
                    />
                </HeroImage>
                <SingleColumnSection title={getText('teamPageTeamTitle')} />
                <TeamMemberGrid type="finland" />
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

export default connect(mapStateToProps)(TeamPage);
