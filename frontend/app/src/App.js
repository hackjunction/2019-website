import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './fontello/css/fontello.css';
import './App.scss';

import config from './config';

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

import * as StaticContentActions from './redux/staticcontent/actions';
import * as DynamicContentActions from './redux/dynamiccontent/actions';

class App extends Component {
    async componentDidMount() {
        this.props.updateDynamicContent();
        this.props.updateStaticContent();
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <main className="App--main">
                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/info" component={InfoPage} />
                            <Route
                                exact
                                path="/junctionweek"
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

                            <Route component={NotFound} />
                        </Switch>

                        <Divider md />
                    </main>

                    <FooterImageButtons />
                    <Footer />
                    {config.IS_DEBUG ? <EditorTools /> : null}
                </div>
            </Router>
        );
    }
}

export default connect(
    null,
    {
        updateDynamicContent: DynamicContentActions.updateDynamicContent,
        updateStaticContent: StaticContentActions.updateStaticContent
    }
)(App);
