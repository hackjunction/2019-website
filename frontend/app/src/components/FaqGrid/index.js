import React from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import FaqGridItem from './FaqGridItem';
import Divider from '../Divider';

import './style.scss';

const FaqsGrid = props => {
    const renderFaqs = (faqs) => {
        return faqs.map(faq => <FaqGridItem {...faq} key={faq._id} />);
    };

    const count = props.faqs.length;
    return (
        <div className="FaqGrid">
            <div className="FaqGrid--column__left">{renderFaqs(props.faqs.slice(0, count / 2))}</div>
            <Divider xs />
            <div className="FaqGrid--column__right">{renderFaqs(props.faqs.slice(count / 2))}</div>
        </div>
    );
};

const mapStateToProps = state => ({
    faqs: ContentSelectors.faqs(state)
});

export default connect(mapStateToProps)(FaqsGrid);
