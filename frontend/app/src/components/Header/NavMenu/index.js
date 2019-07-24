import React, { memo } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as StaticSelectors from '../../../redux/staticcontent/selectors';

import { toggleSidebar } from '../../../redux/dynamiccontent/actions';
import { isSidebarOpen } from '../../../redux/dynamiccontent/selectors';

import Image from '../../Image';
import Divider from '../../Divider';

const NavMenuInner = memo(({ getMedia } = this.props) => {
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
                <Link className="NavMenu--inner__menu-item" to="/challenges">
                    Tracks & Challenges
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/volunteer">
                    Volunteer Info
                </Link>
                <Link className="NavMenu--inner__menu-item" to="/partners">
                    Partners
                </Link>
            </nav>
            <Divider sm />
            <h6 className="NavMenu--inner__menu-title">
                Junction main website
            </h6>
            <a href="https://hackjunction.com">
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
