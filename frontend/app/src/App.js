import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './fontello/css/fontello.css';
import './App.scss';

import Header from './components/Header';
import EditorTools from './components/EditorTools';
//import Footer from './components/Footer';

import HomePage from './Pages/Home';
import InfoPage from './Pages/Info';
import JunctionWeekPage from './Pages/Junction-week';
import NotFound from './Pages/NotFound';
import VolunteerPage from './Pages/Volunteer';

import * as StaticContentActions from './redux/staticcontent/actions';

class App extends Component {
    async componentDidMount() {
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
                                path="/junction-week"
                                component={JunctionWeekPage}
                            />
                            <Route
                                exact
                                path="/volunteer"
                                component={VolunteerPage}
                            />
                            <Route component={NotFound} />
                        </Switch>
                    </main>
                    <EditorTools />
                </div>
            </Router>
        );
    }
}

export default connect(
    null,
    { updateStaticContent: StaticContentActions.updateStaticContent }
)(App);
