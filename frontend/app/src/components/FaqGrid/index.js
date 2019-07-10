import React from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import FaqGridItem from './FaqGridItem';

import './style.scss';

const FaqsGrid = props => {
    const renderFaqs = () => {
        return props.faqs.map(faq => <FaqGridItem {...faq} key={faq._id} />);
    };
    return <div className="FaqGrid">{renderFaqs()}</div>;
};

const mapStateToProps = state => ({
    faqs: ContentSelectors.faqs(state)
});

export default connect(mapStateToProps)(FaqsGrid);
