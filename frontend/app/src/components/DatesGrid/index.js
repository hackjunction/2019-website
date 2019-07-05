import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateEventDates } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import TimeItem from './TimeItem';

import './style.scss';

const EventDateGrid = props => {
    useEffect(() => {
        props.updateEventDates();
    }, []);

    const renderTimes = () => {
        const length = props.EventDates.length;
        const { junction = false } = props;
        let counter = 1;
        return props.EventDates.map(date => {
            if (junction) {
                if (date.duringJunctionWeek) {
                    if (counter >= length) {
                        return <TimeItem {...date} isLast />;
                    } else {
                        for (counter < length; counter++; ) {
                            console.log('counter: ' + counter);
                            return <TimeItem {...date} notLast />;
                        }
                    }
                } else {
                    return counter++;
                }
            } else if (counter >= length) {
                return <TimeItem {...date} isLast />;
            } else {
                for (counter < length; counter++; ) {
                    console.log('counter: ' + counter);
                    return <TimeItem {...date} notLast />;
                }
            }
        });
    };

    return <div className="DatesGrid">{renderTimes()}</div>;
};

const mapStateToProps = state => ({
    EventDates: ContentSelectors.eventDates(state)
});

export default connect(
    mapStateToProps,
    { updateEventDates }
)(EventDateGrid);
