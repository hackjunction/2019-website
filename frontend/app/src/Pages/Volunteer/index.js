import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.scss';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import DatesGrid from '../../components/DatesGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import ImageSection from '../../components/ImageSection';
import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import ButtonLink from '../../components/ButtonLink';
import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';

class VolunteerPage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page
                className="VolunteerPage"
                pageTitle="Volunteers"
                metaDesc={getText('volunteerPageHeaderContent')}
                ogImageUrl={getMedia('volunteerPageHeaderImage').url}
            >
                <HeroImage image={getMedia('volunteerPageHeaderImage')}>
                    <Divider sm />
                    <BasicHeader
                        title={getText('volunteerPageHeaderTitle')}
                        body={getText('volunteerPageHeaderContent')}
                    >
                        {/*  <ButtonLink
                            text={getText('volunteerPageHeaderButton')}
                            link={getText('volunteerPageHeaderButtonLink')}
                            type="mainsite"
                        /> */}
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
                    subtitle={getText('volunteerPageFamilyContent')}
                >
                    <Divider md />
                    <Markdown source={getText('volunteerPageVideo')} />
                </SingleColumnSection>

                <Divider md />
                <ImageSection
                    image={getMedia('volunteerPageInterestedImage')}
                    title={getText('volunteerPageInterestedTitle')}
                    content={getText('volunteerPageInterestedContent')}
                >
                    {/*  <ButtonLink
                        text={getText('volunteerPageFormButton')}
                        link={getText('volunteerPageFormButtonLink')}
                        align="left"
                        type="mainsite"
                    /> */}
                </ImageSection>
                <Divider lg />
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

export default connect(mapStateToProps)(VolunteerPage);
