import React, { PureComponent } from 'react';
import Markdown from '../Markdown';
import AnimateHeight from 'react-animate-height';

class FaqGridItem extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        };
        this.toggleExpanded = this.toggleExpanded.bind(this);
    }
    toggleExpanded() {
        this.setState({
            expanded: !this.state.expanded
        });
    }
    render() {
        const { expanded } = this.state;
        const { question, answer } = this.props;
        return (
            <div
                className={`FaqGridItem ${
                    expanded ? 'FaqGridItem-expanded' : ''
                }`}
                onClick={this.toggleExpanded}
            >
                <span className="FaqGridItem--question">
                    {question}
                    <i
                        className="icon-right-open"
                        onClick={this.setNextMarker}
                    />
                </span>
                <AnimateHeight
                    duration={300}
                    height={this.state.expanded ? 'auto' : 0}
                >
                    <div style={{ height: '30px' }} />
                    <Markdown className="FaqGridItem--answer" source={answer} />
                </AnimateHeight>
            </div>
        );
    }
}
export default FaqGridItem;
