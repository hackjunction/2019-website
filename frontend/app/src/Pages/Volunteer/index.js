import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import DatesGrid from '../../components/DatesGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import VolunteerGuidelines from '../../components/VolunteerGuidelines';
import ImageSection from '../../components/ImageSection';
import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import ButtonLink from '../../components/ButtonLink';

import Page from '../PageHOC';

class VolunteerPage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page className="VolunteerPage">
                <HeroImage image={getMedia('volunteerPageHeaderImage')}>
                    <Divider sm />
                    <BasicHeader
                        title={getText('volunteerPageHeaderTitle')}
                        body={getText('volunteerPageHeaderContent')}
                    >
                        <ButtonLink
                            text={getText('volunteerPageHeaderButton')}
                            link={getText('volunteerPageHeaderButtonLink')}
                            color="purple"
                            size="md"
                        />
                    </BasicHeader>
                </HeroImage>
                <Divider sm />
                <BasicSection
                    title={getText('volunteerPageScheduleTitle')}
                    subtitle={getText('volunteerPageScheduleSubtitle')}
                >
                    <DatesGrid type="volunteer" />
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
                    <Divider md />
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
                <ImageSection
                    image={getMedia('volunteerPageInterestedImage')}
                    title={getText('volunteerPageInterestedTitle')}
                    content={getText('volunteerPageInterestedContent')}
                />
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

export default connect(mapStateToProps)(VolunteerPage);
