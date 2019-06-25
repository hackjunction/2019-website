import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import { updateFaqs } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';
import Markdown from '../Markdown';
import AnimateHeight from 'react-animate-height';
import './style.scss';

class FaqsGrid extends Component {
    constructor(props){
        super(props);
        this.state = {
            expanded: false
        }
    }
    toggleExpanded(){
        this.setState({
            expanded: !this.state.expanded
        });
    }
    useEffect(() => {
        console.log('FaQs rendered for the first time');
        props.updateFaqs();
    }, []);
    const renderFaqs = () => {
        return props.faqs.map(faq => {
            return (
                <div
                    className={`FaqGridItem ${
                        expanded ? 'FaqGridItem-expanded' : ''
                    }`}
                    onClick={toggleExpanded}
                >
                    <span className="FaqGridItem--question">
                        {faq.question}
                        <i
                            className="icon-right-open"
                            onClick={setNextMarker}
                        />
                    </span>
                    <AnimateHeight
                        duration={300}
                        height={this.state.expanded ? 'auto' : 0}
                    >
                        <div style={{ height: '30px' }} />
                        <Markdown
                            className="FaqGridItem--answer"
                            source={faq.answer}
                        />
                    </AnimateHeight>
                </div>
            );
        });
    };
};

const mapStateToProps = state => ({
    faqs: ContentSelectors.faqs(state)
});

export default connect(
    mapStateToProps,
    { updateFaqs }
)(FaqsGrid);
