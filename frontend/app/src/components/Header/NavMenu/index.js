import React, { memo } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { map } from 'lodash-es';

//import {eventconceptsForNav} from '../../../redux/eventconcepts/selector'

import { toggleSidebar } from '../../../redux/dynamiccontent/actions';
import { isSidebarOpen } from '../../../redux/dynamiccontent/selectors';

/* import {
    homePages,
    eventPages,
    communityPages
} from '../../../redux/pages/selectors'; */

const NavMenuInner = memo(({ filler }) => {
    return (
        <div className="NavMenu--inner">
            <Link to="/">
                <img
                    className="NavMenu--inner__logo"
                    src={require('../../../assets/logos/wordmark_black.png')}
                    alt="Junction text logo"
                />
            </Link>
            <nav className="NavMenu--inner__menu">
                <Link to="/">
                    <h6 className="NavMenu--inner__menu-title">Home</h6>
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/junctionWeek">
                    Junction Week
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/info">
                    Participant Info
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/team">
                    Team
                </Link>

                <h6 className="NavMenu--inner__menu-title">Info</h6>
                <Link
                    className="NavMenu--inner__menu-item"
                    to="tracksandchallenges"
                >
                    Tracks & Challenges
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/volunteer">
                    Volunteer Info
                </Link>
            </nav>
        </div>
    );
});

const mapStateToPropsInner = state => ({});

const ConnectedNavMenuInner = connect(mapStateToPropsInner)(NavMenuInner);

const NavMenu = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="NavMenuWrapper">
            <div
                className={`NavMenuOverlay ${
                    isSidebarOpen ? 'NavMenuOverlay-open' : ''
                }`}
                onClick={() => toggleSidebar(false)}
            />
            <div className={`NavMenu ${isSidebarOpen ? 'NavMenu-open' : ''}`}>
                <ConnectedNavMenuInner />
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isSidebarOpen: isSidebarOpen(state)
});

const mapDispatchToProps = dispatch => ({
    toggleSidebar: open => dispatch(toggleSidebar(open))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavMenu);
