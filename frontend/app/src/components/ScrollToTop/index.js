import React from 'react';
import { withRouter } from 'react-router';

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props.location.pathname.split('#')[0] !== prevProps.location.pathname.split('#')[0]) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return null;
    }
}

export default withRouter(ScrollToTop);
