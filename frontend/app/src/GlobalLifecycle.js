// eslint-disable-next-line
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSidebar } from './redux/dynamiccontent/actions';
/** A component which renders nothing, but you can use its lifecycle methods to do things affecting the whole app, such as:
 *
 * - Fetch content from the API and store it in Redux
 * - Initialize services like Google Analytics
 * - Show a privacy popup to users on first visit
 * - etc...
 *
 */

class GlobalLifecycle extends Component {
    async componentDidMount() {
        this.props.toggleSidebar();
    }

    render() {
        return null;
    }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
    toggleSidebar: open => dispatch(toggleSidebar(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GlobalLifecycle);
