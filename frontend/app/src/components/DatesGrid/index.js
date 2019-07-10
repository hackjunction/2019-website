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
    const renderTimes = () => {
        switch (props.type) {
            case 'junction': {
                return renderDate(props.eventDatesJunction);
            }
            case 'volunteer': {
                return renderDate(props.eventDatesVolunteer);
            }
            default:
                return renderDate(props.eventDates);
        }
    };

    return <div className="DatesGrid">{renderTimes()}</div>;
};

const mapStateToProps = (state, ownProps) => {
    return {
        type: ownProps.type,
        eventDates: ContentSelectors.eventDates(state),
        eventDatesJunction: ContentSelectors.eventDatesJunctionWeek(state),
        eventDatesVolunteer: ContentSelectors.eventDatesVolunteerDates(state)
    };
};

export default connect(mapStateToProps)(DatesGrid);
