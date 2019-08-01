import React, { memo } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

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

                <HashLink to="/team">
                    <h6 className="NavMenu--inner__menu-title">Contact</h6>
                </HashLink>
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
