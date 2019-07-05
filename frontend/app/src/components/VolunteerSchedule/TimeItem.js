import React from 'react';

const TimeItem = ({ name, date }) => {
    return (
        <div className="TimeTableGrid-item">
            {name}
            <span className="TimeTableGrid-item-date">{date}</span>
        </div>
    );
};

export default TimeItem;
