import React, { Component } from 'react';

class PageHOC extends Component {
    render() {
        return <div className={'PageHOC ' + this.props.className}>{this.props.children}</div>;
    }
}

export default PageHOC;
