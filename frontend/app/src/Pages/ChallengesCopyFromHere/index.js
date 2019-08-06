import React, { PureComponent, Suspense, Fragment } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import HeroImage from '../../components/HeroImage';
import BasicHeader from '../../components/BasicHeader';
import TracksGrid from '../../components/TracksGrid';
import SingleColumnSection from '../../components/SingleColumnSection';
import Divider from '../../components/Divider';
import NewsLetterForm from '../../components/NewsLetterForm';
import Markdown from '../../components/Markdown';

import * as DynamicSelectors from '../../redux/dynamiccontent/selectors';
import * as StaticSelectors from '../../redux/staticcontent/selectors';
import BasicSection from '../../components/BasicSection';

class ChallengesPage2 extends PureComponent {
    renderChallenges(challenges) {
        if (!Array.isArray(challenges) || challenges.length === 0) {
            return null;
        }

        return challenges.map(challenge => {
            return (
                <Fragment key={challenge.slug}>
                    <BasicSection title={challenge.name} subtitle={''}>
                        <Markdown source={challenge.shortdesc} />
                        <Link
                            className="ChallengesPage--see-more-link"
                            to={`/challenges/${challenge.slug}`}
                        >
                            See more
                        </Link>
                    </BasicSection>
                    <Divider md />
                </Fragment>
            );
        });
    }

    render() {
        const { challenges, loading } = this.props;

        if (loading) {
            return <LoadingPage />;
        }

        return <Page />;
    }
}
