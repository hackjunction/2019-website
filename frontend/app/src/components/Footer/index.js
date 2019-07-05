import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SocialMediaIcons from '../SocialMediaIcons';
import Divider from '../Divider';

import * as ContentSelectors from '../../redux/staticcontent/selectors';
/*
import {
    homePages,
    eventPages,
    communityPages
} from '../../redux/pages/selectors';

import { eventconceptsByPriority } from '../../redux/eventconcepts/selectors';*/

class Footer extends PureComponent {
    /*renderConceptLinks(eventConcepts) {
        return eventConcepts.map(concept => {
            return (
                <Link
                    key={concept.slug}
                    className="FooterInner--right__section-link"
                    to={`/concepts/${concept.slug}`}
                >
                    {concept.name}
                </Link>
            );
        });
    }

    renderExtraPageLinks(pages) {
        return pages.map(page => {
            return (
                <Link
                    key={page.slug}
                    className="FooterInner--right__section-link"
                    to={`/${page.slug}`}
                >
                    {page.navTitle}
                </Link>
            );
        });
    }*/

    render() {
        const { getMedia, getText } = this.props;
        const { homePages, eventPages, communityPages } = this.props;

        return (
            <footer className="Footer">
                <div className="FooterInner">
                    <div className="FooterInner--left">
                        <img
                            className="FooterInner--left__logo"
                            src={require('../../assets/logos/wordmark_black.png')}
                            alt="Junction logo"
                        />
                        <p className="FooterInner--left__slogan">
                            {getText('siteSlogan')}
                        </p>
                        <a
                            className="FooterInner--left__contact"
                            href={`mailto:${getText('siteContactEmail')}`}
                        >
                            {getText('siteContactEmail')}
                        </a>
                        <Divider sm />
                        <SocialMediaIcons />
                    </div>
                    <div className="FooterInner--separator" />
                    <nav className="FooterInner--right">
                        <div className="FooterInner--right__section">
                            <Link to="/">
                                <h5 className="FooterInner--right__section-title">
                                    Home
                                </h5>
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/story"
                            >
                                Story
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/junction-week"
                            >
                                Junction Week
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/info"
                            >
                                Participant info
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/volunteer"
                            >
                                Volunteer Info
                            </Link>
                            {/*this.renderExtraPageLinks(homePages)*/}
                        </div>
                        <div className="FooterInner--right__section">
                            <Link to="/concepts">
                                <h5 className="FooterInner--right__section-title">
                                    Info
                                </h5>
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/tracks"
                            >
                                Tracks & Challenges
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/trasportation"
                            >
                                Transportation
                            </Link>
                            {/*this.renderConceptLinks(eventConcepts)*/}
                            {/*this.renderExtraPageLinks(eventPages)*/}
                        </div>
                        <div className="FooterInner--right__section">
                            <h5 className="FooterInner--right__section-title">
                                Live
                            </h5>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/schedule"
                            >
                                Schedule
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/submission"
                            >
                                Submission
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/volunteers"
                            >
                                For volunteers
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/organizers"
                            >
                                For organizers
                            </Link>
                            {/*this.renderExtraPageLinks(communityPages)*/}
                        </div>
                        <div className="FooterInner--right__section">
                            <a
                                href="https://blog.hackjunction.com"
                                alt="medium"
                            >
                                <h5 className="FooterInner--right__section-title">
                                    Blog
                                </h5>
                            </a>
                            <a
                                href="https://www.flickr.com/photos/151708924@N07/albums/"
                                alt="flickr"
                            >
                                <h5 className="FooterInner--right__section-title">
                                    Photo Gallery
                                </h5>
                            </a>
                            <Link
                                to="/press"
                                className="FooterInner--right__section-link"
                            >
                                Press kit (eng)
                            </Link>
                            <Link
                                to="/media"
                                className="FooterInner--right__section-link"
                            >
                                Press kit (fin)
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/policy"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/terms"
                            >
                                Terms & Conditions
                            </Link>
                        </div>
                    </nav>
                </div>
                <div className="FooterBottom">
                    <span className="FooterBottom--text">
                        Designed and developed with{' '}
                        <span role="img" aria-label="love">
                            💕
                        </span>{' '}
                        &{' '}
                        <span role="img" aria-label="coffee">
                            ☕
                        </span>{' '}
                        by the Junction Team.
                    </span>
                </div>
            </footer>
        );
    }
}

const mapStateToProps = state => {
    return {
        getText: ContentSelectors.buildGetText(state),
        getMedia: ContentSelectors.buildGetMedia(state)
    };
};

export default connect(mapStateToProps)(Footer);
