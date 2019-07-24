import React, { Component } from 'react';
import './style.scss';
import NewsLetterForm from '../../components/NewsLetterForm';

class PageHOC extends Component {
    render() {
        return (
            <div className={'PageHOC ' + this.props.className}>
                {this.props.children}
                <NewsLetterForm />
            </div>
        );
    }
}

export default PageHOC;
