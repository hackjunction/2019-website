import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateFaqs } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import FaqGridItem from './FaqGridItem';

import './style.scss';

const FaqsGrid = props => {
    useEffect(() => {
        props.updateFaqs();
    }, []);
    const renderFaqs = () => {
        return props.faqs.map(faq => <FaqGridItem {...faq} />);
    };
    return <div className="FaqGrid">{renderFaqs()}</div>;
};

const mapStateToProps = state => ({
    faqs: ContentSelectors.faqs(state)
});

export default connect(
    mapStateToProps,
    { updateFaqs }
)(FaqsGrid);
