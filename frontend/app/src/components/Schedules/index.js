import React from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import styles from './styles.module.scss';
import ScheduleItem from './ScheduleItem';

const Schedules = props => {
    const renderSchedules = schedules => {
        return schedules.map(schedule => {
            return <ScheduleItem {...schedule} />;
        });
    };
    return (
        <div className={styles.Schedules}>
            {renderSchedules(props.schedules)}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const date = ownProps.date;
    switch (date) {
        case 'friday':
            return {
                schedules: ContentSelectors.schedulesFriday(state)
            };
        case 'saturday':
            return {
                schedules: ContentSelectors.schedulesSaturday(state)
            };
        case 'sunday':
            return {
                schedules: ContentSelectors.schedulesSunday(state)
            };
        default:
            return;
    }
};

export default connect(mapStateToProps)(Schedules);
