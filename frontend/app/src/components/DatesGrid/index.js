import React from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import TimeItem from './TimeItem';

import './style.scss';

/*
--USAGE--
<DatesGrid type="junction" />
            OR
type="volunteer"
--USAGE-- 
*/

const DatesGrid = props => {
    const renderDate = dates => {
        return dates.map(date => {
            return <TimeItem {...date} key={date._id} />;
        });
    };
    return <div className="DatesGrid">{renderDate(props.eventDates)}</div>;
};

const mapStateToProps = (state, ownProps) => {
    const type = ownProps.type;
    switch (type) {
        case 'junction':
            return {
                eventDates: ContentSelectors.eventDatesJunctionWeek(state)
            };
        case 'volunteer':
            return {
                eventDates: ContentSelectors.eventDatesVolunteerDates(state)
            };
        case 'frontPage':
            return { eventDates: ContentSelectors.eventDatesFrontPage(state) };
        default:
            return { eventDates: ContentSelectors.eventDates(state) };
    }
};

export default connect(mapStateToProps)(DatesGrid);
