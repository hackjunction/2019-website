import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import { updateStaticContent } from '../../redux/staticcontent/actions';
import * as ContentSelectors from '../../redux/staticcontent/selectors';

import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import VolunteerSchedule from '../../components/VolunteerSchedule';
import SingleColumnSection from '../../components/SingleColumnSection';
import VolunteerGuidelines from '../../components/VolunteerGuidelines';

import Page from '../PageHOC';

class VolunteerPage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page className="VolunteerPage">
                <Divider sm />
                <BasicSection
                    title={getText('volunteerPageScheduleTitle')}
                    subtitle={getText('volunteerPageScheduleSubtitle')}
                >
                    <VolunteerSchedule />
                </BasicSection>

                <Divider md />
                <SingleColumnSection
                    title={getText('volunteerPageFamilyTitle')}
                    subtitle={getText('volunteerPageFamilySubtitle')}
                >
                    <Markdown
                        className="VolunteerPage-family"
                        source={getText('volunteerPageFamilyContent')}
                    />
                    <Divider mlg />
                    <Markdown source={getText('volunteerPageVideo')} />
                </SingleColumnSection>
                <Divider lg />
                <SingleColumnSection
                    title={getText('volunteerPageInfoTitle')}
                    subtitle={getText('volunteerPageInfoSubtitle')}
                >
                    <Divider sm />
                    <VolunteerGuidelines />
                </SingleColumnSection>
                <Divider md />

                {/*----------------------------------------------*/}
                {/*THIS SECTION WILL BE TURNED IN TO A COMPONENT*/}
                <SingleColumnSection>
                    <div className="VolunteerPage-interested">
                        <Markdown className="VolunteerPage-interested-img">
                            {getMedia('volunteerPageInterestedImage')}
                        </Markdown>

                        <Markdown
                            className="VolunteerPage-interested-text"
                            source={getText('volunteerPageInterestedContent')}
                        />
                    </div>
                </SingleColumnSection>
                {/*THIS SECTION WILL BE TURNED IN TO A COMPONENT*/}
                {/*----------------------------------------------*/}

                <Divider lg />
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
)(VolunteerPage);
