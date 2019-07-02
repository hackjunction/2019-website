import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.scss';

import { updateStaticContent } from './redux/staticcontent/actions';
import * as ContentSelectors from './redux/staticcontent/selectors';

import Header from './components/Header';
import HeroImage from './components/HeroImage';
import HeroCTA from './components/HeroCTA';
import EditorTools from './components/EditorTools';
import BasicSection from './components/BasicSection';
import Markdown from './components/Markdown';
import Divider from './components/Divider';
import StatBlocks from './components/StatBlocks';

import PartnersGrid from './components/PartnersGrid';
import FaqGrid from './components/FaqGrid';
import ImageButton from './components/ImageButton';
import TracksGrid from './components/TracksGrid';
import SingleColumnSection from './components/SingleColumnSection';

import JourneyGrid from './components/JourneyGrid';

class App extends Component {
    async componentDidMount() {
        this.props.updateStaticContent();
    }

    render() {
        const { getText, getMedia } = this.props;
        return (
            <Router className="foooofoo">
                <div className="App">
                    <Header />
                    <main className="App--main">
                        <HeroImage image={getMedia('homePageHeaderImage')}>
                            <HeroCTA
                                image={getMedia('homePageHeroCtaLogo')}
                                subtitle={getText('homePageHeroCtaSubtitle')}
                                ctaText={getText('homePageHeroCtaText')}
                                ctaLink={getText('homePageHeroCtaLink')}
                            />
                        </HeroImage>
                        <button className="App--main-applyButton">
                            {getText('homePageApplyButton')}
                        </button>
                        <Divider lg />
                        <div className="App--main-buttons">
                            <button className="App--main-infoButton">
                                {getText('homePageInfoButton')}
                            </button>
                            <button className="App--main-volunteerButton">
                                {getText('homePageVolunteerButton')}
                            </button>
                        </div>
                        <Divider md />
                        <SingleColumnSection
                            title={getText('junctionComingSlogan')}
                        />

                        <BasicSection
                            title={getText('junctionMainTitle')}
                            subtitle={getText('junctionMainSubtitle')}
                        >
                            <span className="App--main-introText">
                                {getText('homePageIntroText')}
                            </span>
                            <StatBlocks />
                        </BasicSection>
                        <Divider md />
                        <BasicSection
                            title={getText('homePageJourneyTitle')}
                            subtitle={getText('homePageJourneySubtitle')}
                        />
                        <Divider lg />
                        <SingleColumnSection
                            title={getText('tracksTitle')}
                            subtitle={getText('tracksSubtitle')}
                        />
                        <TracksGrid />
                        <Divider md />
                        <SingleColumnSection>
                            <div className="App--main-videoContainer">
                                <iframe
                                    className="App--main-videoContainer-video"
                                    src={getText('homePageVideoLink')}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </SingleColumnSection>
                        <PartnersGrid />
                        <FaqGrid />
                        <Divider lg />

                        <div className="imageButtons">
                            <ImageButton />
                        </div>
                    </main>
                    <EditorTools />
                </div>
            </Router>
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
)(App);
