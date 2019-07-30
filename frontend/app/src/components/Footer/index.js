import React, { PureComponent } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SocialMediaIcons from '../SocialMediaIcons';
import Divider from '../Divider';

import * as ContentSelectors from '../../redux/staticcontent/selectors';

class Footer extends PureComponent {
    render() {
        const { getText } = this.props;

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
                                to="/junctionweek"
                            >
                                Junction Week
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/info"
                            >
                                Participant Info
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/team"
                            >
                                Team
                            </Link>
                        </div>
                        <div className="FooterInner--right__section">
                            <Link to="/info">
                                <h5 className="FooterInner--right__section-title">
                                    Info
                                </h5>
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/challenges"
                            >
                                Tracks & Challenges
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/volunteer"
                            >
                                Volunteer Info
                            </Link>
                            <Link
                                className="FooterInner--right__section-link"
                                to="/partners"
                            >
                                Partners
                            </Link>
                        </div>
                        <div className="FooterInner--right__section">
                            <a
                                href="https://www.flickr.com/photos/151708924@N07/albums/"
                                alt="flickr"
                            >
                                <h5 className="FooterInner--right__section-title">
                                    Photo Gallery
                                </h5>
                            </a>
                            <a
                                href="https://www.hackjunction.com/press"
                                className="FooterInner--right__section-link"
                            >
                                Press kit (eng)
                            </a>
                            <a
                                href="https://www.hackjunction.com/media"
                                className="FooterInner--right__section-link"
                            >
                                Press kit (fin)
                            </a>
                            <a
                                className="FooterInner--right__section-link"
                                href="https://www.hackjunction.com/policy"
                            >
                                Privacy Policy
                            </a>
                            <a
                                className="FooterInner--right__section-link"
                                href="https://www.hackjunction.com/terms"
                            >
                                Terms & Conditions
                            </a>
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
