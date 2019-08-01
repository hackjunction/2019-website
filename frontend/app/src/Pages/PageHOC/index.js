import React, { Component } from 'react';
import './style.scss';
import { getText, getMedia } from '../../redux/staticcontent/helpers';

import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import cloudinary from 'cloudinary-core';
import { motion } from 'framer-motion';

import config from '../../config';

import * as NavActions from '../../redux/dynamiccontent/actions';

const cl = cloudinary.Cloudinary.new({
    cloud_name: config.CLOUDINARY_CLOUD_NAME
});

class PageHOC extends Component {
    componentDidMount() {
        const { setNavTitle, pageTitle, toggleSidebar } = this.props;

        toggleSidebar(false);
        setNavTitle(pageTitle);
    }

    componentDidUpdate(prevProps) {
        const { setNavTitle, toggleSidebar, pageTitle } = this.props;

        if (prevProps.pageTitle !== pageTitle) {
            setNavTitle(pageTitle);
            toggleSidebar(false);
        }
    }
    render() {
        const { className, children, pageTitle, metaDesc, ogImageUrl, ogImageTwitterUrl } = this.props;
        const canonicalUrl = 'https://' + window.location.hostname + window.location.pathname;
        const animations = {
            initial: {
                opacity: 0,
                transition: {
                    duration: 3
                }
            },
            visible: {
                opacity: 1,
                transition: {
                    duration: 0.7
                }
            },
            exit: {
                opacity: 0,
                transition: {
                    duration: 0.3
                }
            }
        };
        return (
            <motion.div
                initial="initial"
                animate="visible"
                exit="exit"
                variants={animations}
                className={'Page--wrapper ' + className}
            >
                <Helmet defaultTitle="Junction 2019 | Hack the Future" titleTemplate="Junction 2019 | %s">
                    <link rel="canonical" href={canonicalUrl} />
                    <meta property="og:url" content={canonicalUrl} />
                    <title>{pageTitle}</title>
                    <meta name="robots" content="index,follow" />
                    <meta name="description" content={metaDesc} />
                    {/* OpenGraph properties */}
                    <meta property="og:title" content={'Junction 2019 | ' + pageTitle} />
                    <meta property="og:description" content={metaDesc} />
                    <meta property="og:type" content="website" />
                    <meta property="og:image" content={ogImageUrl} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    {/* Twitter cards */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="@hackJunction" />
                    <meta name="twitter:creator" content="@hackJunction" />
                    <meta name="twitter:title" content={'Junction 2019 | ' + pageTitle} />
                    <meta name="twitter:description" content={metaDesc} />
                    <meta name="twitter:image" content={ogImageTwitterUrl} />
                </Helmet>
                {children}
            </motion.div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { pageTitle, metaDesc, ogImage } = ownProps;
    const content = getText(state);
    const media = getMedia(state);
    let ogImageUrl = ownProps.ogImageUrl;
    let ogImageTwitterUrl = ownProps.ogImageUrl;

    if (media[ogImage]) {
        ogImageUrl = cl.url(media[ogImage].public_id, {
            width: 1200,
            height: 630,
            crop: 'fill',
            gravity: 'center'
        });
        ogImageTwitterUrl = cl.url(media[ogImage].public_id, {
            width: 1200,
            height: 600,
            crop: 'fill',
            gravity: 'center'
        });
    }

    return {
        pageTitle: content[pageTitle] || ownProps.pageTitle,
        metaDesc: content[metaDesc] || ownProps.metaDesc,
        ogImageUrl,
        ogImageTwitterUrl
    };
};

const mapDispatchToProps = dispatch => ({
    setNavTitle: title => dispatch(NavActions.setNavTitle(title)),
    toggleSidebar: open => dispatch(NavActions.toggleSidebar(open))
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageHOC);
