import React, { memo } from 'react';
import './style.scss';

import config from '../../../config/config';
import * as featuresList from '../../../config/features';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as StaticSelectors from '../../../redux/staticcontent/selectors';

import { toggleSidebar } from '../../../redux/dynamiccontent/actions';
import { isSidebarOpen } from '../../../redux/dynamiccontent/selectors';

import Image from '../../Image';
import Divider from '../../Divider';

const NavMenuInner = memo(props => {
    const { getMedia } = props;

    const features = featuresList.features;
    return (
        <div className='NavMenu--inner'>
            <Link to='/'>
                <Image
                    className='NavMenu--inner__logo'
                    image={getMedia('navMenuTopLogo')}
                    alt='Junction text logo'
                />
            </Link>
            <nav className='NavMenu--inner__menu'>
                {/* SITES THAT ARE PUBLISHED FROM FEATURES*/}
                <Link to='/'>
                    <h6 className='NavMenu--inner__menu-title'>Home</h6>
                </Link>
                {features.live === true ? (
                    <Link className='NavMenu--inner__menu-item' to='/live'>
                        Live
                    </Link>
                ) : null}
                {features.demo === true ? (
                    <Link className='NavMenu--inner__menu-item' to='/demo'>
                        Demo
                    </Link>
                ) : null}
                {features.challenges === true ? (
                    <Link
                        className='NavMenu--inner__menu-item'
                        to='/challenges'
                    >
                        Tracks & Challenges
                    </Link>
                ) : null}
                {features.partners === true ? (
                    <Link className='NavMenu--inner__menu-item' to='/partners'>
                        Partners
                    </Link>
                ) : null}
                {features.jobs === true ? (
                    <Link className='NavMenu--inner__menu-item' to='/jobs'>
                        Jobs
                    </Link>
                ) : null}
                <Divider xs />
                {features.hardware === true ? (
                    <Link className='NavMenu--inner__menu-item' to='/hardware'>
                        Hardware Lab
                    </Link>
                ) : null}
                {features.junctionWeek === true ? (
                    <Link
                        className='NavMenu--inner__menu-item'
                        to='/junction-week'
                    >
                        Junction Week
                    </Link>
                ) : null}
                {features.info === true ? (
                    <Link className='NavMenu--inner__menu-item' to='/info'>
                        Practical Info
                    </Link>
                ) : null}
                {features.transportation === true ? (
                    <Link
                        className='NavMenu--inner__menu-item'
                        to='/transportation'
                    >
                        Transportation
                    </Link>
                ) : null}
                <Divider xs />
                {features.terminal === true ? (
                    <Link className='NavMenu--inner__menu-item' to='/terminal'>
                        Terminal
                    </Link>
                ) : null}

                {/*  <Link
                    className='NavMenu--inner__menu-item'
                    to='/community-challenge'
                >
                    Community Challenge 2019
                </Link> */}

                {/* BOTTOM */}
                {features.team === true ? (
                    <Link to='/team'>
                        <h6 className='NavMenu--inner__menu-title'>Contact</h6>
                    </Link>
                ) : null}

                {/* NEW SITES NOT YET PUBLISHED */}
                {config.IS_DEBUG ? (
                    <div>
                        <h6 className='NavMenu--inner__menu-title'>
                            New sites not live yet
                        </h6>

                        {features.live === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/live'
                            >
                                Live
                            </Link>
                        ) : null}
                        {features.demo === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/demo'
                            >
                                Demo
                            </Link>
                        ) : null}
                        {features.challenges === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/challenges'
                            >
                                Tracks & Challenges
                            </Link>
                        ) : null}
                        {features.partners === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/partners'
                            >
                                Partners
                            </Link>
                        ) : null}
                        {features.jobs === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/jobs'
                            >
                                Jobs
                            </Link>
                        ) : null}
                        <Divider xs />
                        {features.hardware === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/hardware'
                            >
                                Hardware Lab
                            </Link>
                        ) : null}
                        {features.junctionWeek === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/junction-week'
                            >
                                Junction Week
                            </Link>
                        ) : null}
                        {features.info === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/info'
                            >
                                Practical Info
                            </Link>
                        ) : null}
                        {features.transportation === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/transportation'
                            >
                                Transportation
                            </Link>
                        ) : null}
                        <Divider xs />
                        {features.terminal === false ? (
                            <Link
                                className='NavMenu--inner__menu-item'
                                to='/terminal'
                            >
                                Terminal
                            </Link>
                        ) : null}

                        {/* BOTTOM */}
                        {features.team === false ? (
                            <Link to='/team'>
                                <h6 className='NavMenu--inner__menu-title'>
                                    Contact
                                </h6>
                            </Link>
                        ) : null}
                    </div>
                ) : null}
            </nav>

            <h6 className='NavMenu--inner__menu-title'>
                Junction main website
            </h6>
            <a
                href='https://hackjunction.com'
                target='_blank'
                rel='noopener noreferrer'
            >
                <Image
                    className='NavMenu--bottom-logo'
                    image={getMedia('navMenuBottomLogo')}
                    alt='Junction logo'
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
        <div className='NavMenuWrapper'>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
