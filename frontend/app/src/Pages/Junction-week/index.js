import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { updateStaticContent } from '../../redux/staticcontent/actions';
import * as ContentSelectors from '../../redux/staticcontent/selectors';

import Page from '../PageHOC';

import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import FaqGrid from '../../components/FaqGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import DatesGrid from '../../components/DatesGrid';
//import HeaderImage from '../../components/HeaderImage';

class JunctionWeekPage extends Component {
    render() {
        const { getMedia, getText } = this.props;

        return (
            <Page className="JunctionWeekPage">
                {/*  <HeaderImage
                    image={getMedia('junctionWeekPageHeaderImage')}
                    alt="Header image"
                >
                    <Markdown source={getText('junctionWeekPageIntroText')} />
                </HeaderImage>
                */}
                <Divider md />
                <BasicSection
                    title={getText('junctionWeekPageWeekTitle')}
                    subtitle={getText('junctionWeekPageWeekSubtitle')}
                >
                    <DatesGrid junction />
                    <Markdown> yeetus cleetus </Markdown>
                </BasicSection>
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
)(JunctionWeekPage);
