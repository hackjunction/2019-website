import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateVolunteerDates } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import './style.scss';

const VolunteerSchedule = props => {
    useEffect(() => {
        props.updateVolunteerDates();
    }, []);

    const renderSchedules = () => {
        const length = props.VolunteerDates.length;
        let counter = 1;
        return props.VolunteerDates.map(date => {
            if (counter < length) {
                counter += 1;
                return (
                    <div className="VolunteerDatesGrid-itemContainer">
                        <div className="VolunteerDatesGrid-itemContainer-item">
                            <span className="VolunteerDatesGrid-itemContainer-item-date">
                                {date.date}
                            </span>
                            {date.name}
                        </div>
                        <i className="icon-down-open" />
                    </div>
                );
            } else if (counter === length) {
                return (
                    <div className="VolunteerDatesGrid-itemContainer">
                        <div className="VolunteerDatesGrid-itemContainer-item">
                            <span className="VolunteerDatesGrid-itemContainer-item-date">
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
    };
    return <div className="VolunteerDatesGrid">{renderSchedules()}</div>;
};

const mapStateToProps = state => ({
    VolunteerDates: ContentSelectors.volunteerDates(state)
});

export default connect(
    mapStateToProps,
    { updateVolunteerDates }
)(VolunteerSchedule);
