import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './fontello/css/fontello.css';
import './App.scss';

import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import { hotjar } from 'react-hotjar';
import { withRouter } from 'react-router';
import { AnimatePresence } from 'framer-motion';

import config from './config/config';
import * as featuresList from './config/features';

import ScrollToTop from './components/ScrollToTop';
import GlobalLifecycle from './GlobalLifecycle';

import Header from './components/Header';
import EditorTools from './components/EditorTools';
import Footer from './components/Footer';
import FooterImageButtons from './components/FooterImageButtons';
import Divider from './components/Divider';

import HomePage from './Pages/Home';
import InfoPage from './Pages/Info';
import JunctionWeekPage from './Pages/JunctionWeek';
import NotFound from './Pages/NotFound';
import VolunteerPage from './Pages/Volunteer';
import TeamPage from './Pages/Team';
import ChallengesPage from './Pages/Challenges';
import ChallengePage from './Pages/Challenge';
import PartnersPage from './Pages/Partners';
import TerminalPage from './Pages/Terminal';
import TransportationPage from './Pages/Info/Transportation';
import LivePage from './Pages/Live';
import DemoPage from './Pages/Demo';
import HardwarePage from './Pages/Hardware';
import JobsPage from './Pages/Jobs';
import BasicPage from './Pages/BasicPage';
import CommunityChallengePage from './Pages/CommunityChallenge';

import * as StaticContentActions from './redux/staticcontent/actions';
import * as DynamicContentActions from './redux/dynamiccontent/actions';
import * as SocialMediaActions from './redux/socialmedias/actions';

class App extends Component {
    componentDidMount() {
        this.props.updateDynamicContent();
        this.props.updateStaticContent();
        this.props.updateSocialMedias();

        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.init(
                config.FACEBOOK_PIXEL_ID,
                {},
                { autoConfig: true, debug: false }
            );
        }

        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.initialize(config.GOOGLE_ANALYTICS_ID);
        }

        if (config.HOTJAR_ID && config.HOTJAR_SV) {
            hotjar.initialize(config.HOTJAR_ID, config.HOTJAR_SV);
        }

        this.handleRouteChange(this.props.history.location);
        this.unlisten = this.props.history.listen(this.handleRouteChange);
    }

    componentWillUnmount() {
        this.unlisten();
    }

    handleRouteChange(location) {
        if (config.GOOGLE_ANALYTICS_ID) {
            ReactGA.pageview(location.pathname);
        }
    }

    setFeatures() {
        let features;
        let mode;
        if (config.IS_DEBUG) {
            mode = 'dev';
        } else {
            mode = 'noDev';
        }

        if (mode === 'dev') {
            features = featuresList.allFeatures;
        } else if (mode === 'noDev') {
            features = featuresList.features;
        }
        return features;
    }

    render() {
        const features = this.setFeatures();
        return (
            <div className="App">
                <Header />
                <main className="App--main">
                    <AnimatePresence>
                        <Switch >
                            {features.home === true ? (
                                <Route exact path="/" component={HomePage} />
                            ) : null}

                            {features.info === true ? (
                                <Route
                                    exact
                                    path="/info"
                                    component={InfoPage}
                                />
                            ) : null}

                            {features.junctionWeek === true ? (
                                <Route
                                    exact
                                    path="/junction-week"
                                    component={JunctionWeekPage}
                                />
                            ) : null}

                            {features.volunteer === true ? (
                                <Route
                                    exact
                                    path="/volunteer"
                                    component={VolunteerPage}
                                />
                            ) : null}

                            {features.team === true ? (
                                <Route
                                    exact
                                    path="/team"
                                    component={TeamPage}
                                />
                            ) : null}

                            {features.challenges === true ? (
                                <Route
                                    exact
                                    path="/challenges"
                                    component={ChallengesPage}
                                />
                            ) : null}

                            {features.challenge === true ? (
                                <Route
                                    path="/challenges/:slug"
                                    component={ChallengePage}
                                />
                            ) : null}

                            {features.partners === true ? (
                                <Route
                                    exact
                                    path="/partners"
                                    component={PartnersPage}
                                />
                            ) : null}

                            {features.terminal === true ? (
                                <Route
                                    exact
                                    path="/terminal"
                                    component={TerminalPage}
                                />
                            ) : null}

                            {features.transportation === true ? (
                                <Route
                                    exact
                                    path="/transportation"
                                    component={TransportationPage}
                                />
                            ) : null}

                            {features.live === true ? (
                                <Route
                                    exact
                                    path="/live"
                                    component={LivePage}
                                />
                            ) : null}

                            {features.demo === true ? (
                                <Route
                                    exact
                                    path="/demo"
                                    component={DemoPage}
                                />
                            ) : null}

                            {features.hardware === true ? (
                                <Route
                                    exact
                                    path="/hardware"
                                    component={HardwarePage}
                                />
                            ) : null}
                            {features.jobs === true ? (
                                <Route
                                    exact
                                    path="/jobs"
                                    component={JobsPage}
                                />
                            ) : null}
                            <Route
                                exact
                                path="/community-challenge"
                                component={CommunityChallengePage}
                            />
                            <Route path="/:slug" component={BasicPage} />
                            <Route component={NotFound} />
                        </Switch>
                    </AnimatePresence>

                    <Divider md />
                </main>

                <FooterImageButtons />
                <Footer />
                <ScrollToTop />
                <GlobalLifecycle />
                {config.IS_DEBUG ? <EditorTools /> : null}
            </div>
        );
    }
}

export default connect(
    null,
    {
        updateDynamicContent: DynamicContentActions.updateDynamicContent,
        updateStaticContent: StaticContentActions.updateStaticContent,
        updateSocialMedias: SocialMediaActions.updateSocialMedias
    }
)(withRouter(App));
