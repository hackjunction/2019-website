import React, { memo } from 'react';
import './style.scss';

import config from '../../../config';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as StaticSelectors from '../../../redux/staticcontent/selectors';

import { toggleSidebar } from '../../../redux/dynamiccontent/actions';
import { isSidebarOpen } from '../../../redux/dynamiccontent/selectors';

import Image from '../../Image';

const NavMenuInner = memo(props => {
    const { getMedia } = props;
    return (
        <div className="NavMenu--inner">
            <Link to="/">
                <Image
                    className="NavMenu--inner__logo"
                    image={getMedia('navMenuTopLogo')}
                    alt="Junction text logo"
                />
            </Link>
            <nav className="NavMenu--inner__menu">
                {/* HOME */}
                <Link to="/">
                    <h6 className="NavMenu--inner__menu-title">Home</h6>
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/junction-week">
                    Junction Week
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/info">
                    Practical Info
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/challenges">
                    Tracks & Challenges
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/partners">
                    Partners
                </Link>

                {/* INFO */}
                {/* <Link to="/info">
                    <h6 className="NavMenu--inner__menu-title">Info</h6>
                </Link>
                <Link
                    className="NavMenu--inner__menu-item"
                    to="/transportation"
                >
                    transportation
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/demo-expo">
                    Demo Expo
                </Link>
                <Link
                    className="NavMenu--inner__menu-item"
                    to="/continuity-toolkit"
                >
                    Continuity Toolkit 
                </Link> */}
                {/* LIVE */}
                {/* <Link to="/live">
                    <h6 className="NavMenu--inner__menu-title">Live</h6>
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/event101">
                    Event 101
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/schedule">
                    Schedule
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/submission">
                    Submission
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/food-info">
                    Food Info
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/map">
                    Venue Map
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/hardware">
                    Hardware
                </Link> */}

                {/* BOTTOM */}
                <Link to="/team">
                    <h6 className="NavMenu--inner__menu-title">Contact</h6>
                </Link>
                {config.IS_DEBUG ? (
                    <h6 className="NavMenu--inner__menu-title">
                        New sites not live yet
                    </h6>
                ) : null}
                {config.IS_DEBUG ? (
                    <Link className="NavMenu--inner__menu-item" to="/terminal">
                        Terminal
                    </Link>
                ) : null}
                {config.IS_DEBUG ? (
                    <Link
                        className="NavMenu--inner__menu-item"
                        to="/transportation"
                    >
                        Transportation
                    </Link>
                ) : null}
            </nav>

            <h6 className="NavMenu--inner__menu-title">
                Junction main website
            </h6>
            <a
                href="https://hackjunction.com"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image
                    className="NavMenu--bottom-logo"
                    image={getMedia('navMenuBottomLogo')}
                    alt="Junction logo"
                />
            </a>
        </div>
    );
});

const mapStateToPropsInner = state => ({
    getMedia: StaticSelectors.buildGetMedia(state)
});

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
