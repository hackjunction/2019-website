import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateFaqs } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import FaqGridItem from './FaqGridItem';

import './style.scss';

class FaqsGrid extends PureComponent {
    componentDidMount() {
        console.log('FaQs rendered for the first time');
        this.props.updateFaqs();
        console.log('props: ' + JSON.stringify(this.props));
    }

    renderFaqs() {
        const { faqs } = this.props;
        return faqs.map(faq => <FaqGridItem {...faq} />);
    }

    render() {
        return <div className="FaqGrid">{this.renderFaqs()}</div>;
    }
}

const mapStateToProps = state => ({
    faqs: ContentSelectors.faqs(state)
});

export default connect(
    mapStateToProps,
    { updateFaqs }
)(FaqsGrid);
