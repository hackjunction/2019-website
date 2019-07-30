import React, { Component } from 'react';
import './style.scss';

import Page from '../PageHOC';
import Divider from '../../components/Divider';
import ButtonLink from '../../components/ButtonLink';

class NotFoundPage extends Component {
    render() {
        return (
            <Page className="NotFoundPage">
                <h1 className="NotFoundPage--title">Page not found!</h1>
                <Divider md />
                <span className="NotFoundPage--subtitle">
                    It seems like the page you were looking for doesn't exist...
                </span>
                <Divider sm />
                <ButtonLink text="HOME" link="/" size="sm" />
            </Page>
        );
    }
}

export default NotFoundPage;
