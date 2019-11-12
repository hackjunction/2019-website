import React, { memo } from 'react';
import './style.scss';

import config from '../../../config/config';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as StaticSelectors from '../../../redux/staticcontent/selectors';

import { toggleSidebar } from '../../../redux/dynamiccontent/actions';
import { isSidebarOpen } from '../../../redux/dynamiccontent/selectors';

import Image from '../../Image';
import Divider from '../../Divider';

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
                <Link className="NavMenu--inner__menu-item" to="/live">
                    Live
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/demo">
                    Demo
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/challenges">
                    Tracks & Challenges
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/partners">
                    Partners
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/jobs">
                    Jobs
                </Link>
                <Divider xs />
                <Link className="NavMenu--inner__menu-item" to="/hardware">
                    Hardware Lab
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/junction-week">
                    Junction Week
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/info">
                    Practical Info
                </Link>
                <Link
                    className="NavMenu--inner__menu-item"
                    to="/transportation"
                >
                    Transportation
                </Link>
                <Divider xs />
                <Link className="NavMenu--inner__menu-item" to="/terminal">
                    Terminal
                </Link>
                <Link
                    className="NavMenu--inner__menu-item"
                    to="/community-challenge"
                >
                    Community Challenge 2019
                </Link>

                {/* BOTTOM */}
                <Link to="/team">
                    <h6 className="NavMenu--inner__menu-title">Contact</h6>
                </Link>

                {/* NEW SITES NOT YET PUBLISHED */}
                {config.IS_DEBUG ? (
                    <div>
                        <h6 className="NavMenu--inner__menu-title">
                            New sites not live yet
                        </h6>
                    </div>
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
