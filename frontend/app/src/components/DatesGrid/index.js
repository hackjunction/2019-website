import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateEventDates } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import TimeItem from './TimeItem';

import './style.scss';

const DatesGrid = props => {
    useEffect(() => {
        updateEventDates();
    }, []);

    const { junction = false, volunteer = false, all = true } = props;

    const renderTimes = dates => {
        return dates.map(date => {
            return <TimeItem {...date} />;
        });
    };

    if (all) {
        return <div className="DatesGrid">{renderTimes(props.eventDates)}</div>;
    } else if (junction) {
        return (
            <div className="DatesGrid">
                {renderTimes(props.eventDatesJunction)}
            </div>
        );
    } else if (volunteer) {
        return (
            <div className="DatesGrid">
                {renderTimes(props.eventDatesVolunteer)}
            </div>
        );
    }
};

const mapStateToProps = state => ({
    eventDates: ContentSelectors.eventDates(state),
    eventDatesJunction: ContentSelectors.eventDatesJunctionWeek(state),
    eventDatesVolunteer: ContentSelectors.eventDatesVolunteer(state)
});

export default connect(
    mapStateToProps,
    { updateEventDates }
)(DatesGrid);
