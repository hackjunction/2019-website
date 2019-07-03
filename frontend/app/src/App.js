import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './fontello/css/fontello.css';
import './App.scss';

import Header from './components/Header';
import EditorTools from './components/EditorTools';
//import Footer from './components/Footer';

import HomePage from './Pages/Home';
import Page2 from './Pages/Home';

import * as StaticContentActions from './redux/staticcontent/actions';

const NotFound = () => {
    return (
        <div style={{ marginTop: '100px' }}>
            <h1>Not Found</h1>
        </div>
    );
};

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
                            <Route exact path="/other-page" component={Page2} />

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
