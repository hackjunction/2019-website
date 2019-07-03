import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { updateEventDates } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import './style.scss';

class EventDateGrid extends PureComponent {
    componentDidMount() {
        this.props.updateEventDates();
    }

    renderTimes() {
        const { EventDates } = this.props;
        const length = EventDates.length;
        let counter = 1;
        return EventDates.map(date => {
            if (counter < length) {
                counter += 1;
                return (
                    <div className="DatesGrid-itemContainer">
                        <div className="DatesGrid-itemContainer-item">
                            <span className="DatesGrid-itemContainer-item-date">
                                {date.date}
                            </span>
                            {date.name}
                        </div>
                        <i className="icon-down-open" />
                    </div>
                );
            } else if (counter === length) {
                return (
                    <div className="DatesGrid-itemContainer">
                        <div className="DatesGrid-itemContainer-item">
                            <span className="DatesGrid-itemContainer-item-date">
                                {date.date}
                            </span>
                            {date.name}
                        </div>
                    </div>
                );
            } else {
                return <h1>Error fetching dates</h1>;
            }
        });
        /* return EventDates.map(date => (
            
                <div className="DatesGrid-item">
                    <span className="DatesGrid-item-date">{date.date}</span>
                    {date.name}
                </div>
                <i className="icon-down-open" />
            
        ));*/
    }

    render() {
        return <div className="DatesGrid">{this.renderTimes()}</div>;
    }
}

const mapStateToProps = state => ({
    EventDates: ContentSelectors.eventDates(state)
});

export default connect(
    mapStateToProps,
    { updateEventDates }
)(EventDateGrid);
