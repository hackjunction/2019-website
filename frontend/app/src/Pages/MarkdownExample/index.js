import React, { PureComponent } from 'react';

import ReactMarkdown from 'react-markdown';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { findIndex } from 'lodash-es';

import * as DynamicSelectors from '../../redux/dynamiccontent/selectors';

import Markdown from '../../components/Markdown';
import HeroImage from '../../components/HeroImage';

import Page from '../PageHOC';
import NotFoundPage from '../NotFound';
import BasicHeader from '../../components/BasicHeader';

class MarkdownExamplePage extends PureComponent {
    render() {
        const { page } = this.props;

        if (!page) {
            return <NotFoundPage />;
        }
        return (
            <Page
                className="GenericPage"
                pageTitle={page.title}
                metaDesc={page.headerContent}
                ogImageUrl={page.headerImage ? page.headerImage.url : null}
            >
                <HeroImage image={page.headerImage}>
                    <BasicHeader
                        title={page.headerTitle}
                        body={page.headerContent}
                    />
                </HeroImage>
                <div>
                    <Markdown source={page.content} />
                </div>
            </Page>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const { match } = ownProps;
    const { slug } = match.params;
    console.log('Pages');
    console.log(DynamicSelectors.genericPages(state));

    //Get all pages
    const genericPages = DynamicSelectors.genericPages(state);

    //Get index of page with the same slug
    const pageIndex = findIndex(genericPages, p => {
        return p.slug.trim() === slug.trim();
    });

    //Get Page from genericPages with the index
    const page = genericPages[pageIndex];
    return {
        page: page
    };
};

export default connect(mapStateToProps)(MarkdownExamplePage);
