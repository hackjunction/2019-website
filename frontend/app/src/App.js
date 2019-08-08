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

import config from './config';

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
import PartnersPage from './Pages/Partners';
import TerminalPage from './Pages/Terminal';
import TransportationPage from './Pages/Info/Transportation';

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

        if (config.FACEBOOK_PIXEL_ID) {
            ReactPixel.pageView();
        }
    }

    render() {
        const { location } = this.props;
        return (
            <div className="App">
                <Header />
                <main className="App--main">
                    <AnimatePresence>
                        <Switch location={location} key={location.pathname}>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/info" component={InfoPage} />
                            <Route
                                exact
                                path="/junction-week"
                                component={JunctionWeekPage}
                            />
                            <Route
                                exact
                                path="/volunteer"
                                component={VolunteerPage}
                            />
                            <Route exact path="/team" component={TeamPage} />
                            <Route
                                exact
                                path="/challenges"
                                component={ChallengesPage}
                            />
                            <Route
                                exact
                                path="/partners"
                                component={PartnersPage}
                            />
                            {config.IS_DEBUG ? (
                                <Route
                                    exact
                                    path="/terminal"
                                    component={TerminalPage}
                                />
                            ) : null}

                            {config.IS_DEBUG ? (
                                <Route
                                    exact
                                    path="/transportation"
                                    component={TransportationPage}
                                />
                            ) : null}

                            {/* Challenges */}
                            {/* {config.IS_DEBUG ? (
                                <Route
                                    path="/challenges/:slug"
                                    component={ChallengePage}
                                />
                            ) : null} */}

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
