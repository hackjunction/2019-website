import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

import BasicSection from '../../components/BasicSection';
import Markdown from '../../components/Markdown';
import Divider from '../../components/Divider';
import PartnersGrid from '../../components/PartnersGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import ImageSection from '../../components/ImageSection';
import HeroImage from '../../components/HeroImage';
import HeaderImage from '../../components/HeaderImage';
import ButtonLink from '../../components/ButtonLink';
import NewsLetterForm from '../../components/NewsLetterForm';

import Page from '../PageHOC';

class TerminalPage extends Component {
    render() {
        const { getMedia, getText } = this.props;
        return (
            <Page
                className="TerminalPage"
                pageTitle="Terminal"
                metaDesc={getText('terminalPageHeaderContent')}
                ogImageUrl={getMedia('terminalPageHeaderImage').url}
            >
                <HeroImage image={getMedia('terminalPageHeaderImage')}>
                    <HeaderImage
                        subtitle={getText('terminalPageHeaderContent')}
                        image={getMedia('terminalPageHeaderLogo')}
                        noBg={true}
                    >
                        <ButtonLink
                            text={getText('terminalPageHeaderButton')}
                            link={getText('terminalPageHeaderButtonLink')}
                            size="sm"
                        />
                    </HeaderImage>

                    <Divider />
                </HeroImage>
                <BasicSection title={getText('terminalPageSection1Title')}>
                    <Markdown source={getText('terminalPageSection1Content')} />
                </BasicSection>
                <Divider sm />
                <SingleColumnSection>
                    <Markdown source={getText('terminalPageVideoLink')} />
                </SingleColumnSection>
                <Divider md />
                <SingleColumnSection
                    title={getText('terminalPagePartnerTitle')}
                    subtitle={getText('terminalPagePartnerSubtitle')}
                />
                <PartnersGrid type="front" />
                <Divider md />
                <BasicSection title={getText('terminalPageSection2Title')}>
                    <Markdown source={getText('terminalPageSection2Content')} />
                </BasicSection>
                <Divider sm />
                <BasicSection title={getText('terminalPageSection3Title')}>
                    <Markdown source={getText('terminalPageSection3Content')} />
                </BasicSection>
                <Divider md />
                <SingleColumnSection
                    title={getText('terminalPageSection4Title')}
                    subtitle={getText('terminalPageSection4Content')}
                />
                <Divider md />
                <ImageSection
                    image={getMedia('terminalPageImageSectionImg')}
                    title={getText('terminalPageImageSectionTitle')}
                    content={getText('terminalPageImageSectionContent')}
                >
                    <ButtonLink
                        text={getText('terminalPageImageSectionButton')}
                        link={getText('terminalPageImageSectionButtonLink')}
                        align="left"
                        size="md"
                        type="mainsite"
                    />
                </ImageSection>
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

export default connect(mapStateToProps)(TerminalPage);
