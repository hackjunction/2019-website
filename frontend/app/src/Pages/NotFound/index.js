import React, { Component } from 'react';
import './style.scss';

import Page from '../PageHOC';

class NotFoundPage extends Component {
    render() {
        return (
            <Page className="NotFoundPage">
                <h1>Page not found!</h1>
            </Page>
        );
    }
}

export default NotFoundPage;
