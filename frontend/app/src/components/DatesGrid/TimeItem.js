import React from 'react';

const TimeItem = ({ name, date } = this.props) => {
    return (
        <div className="TimeTableGrid-item">
            {name}
            <span className="TimeTableGrid-item-date">{date}</span>
        </div>
    );
};

export default TimeItem;
