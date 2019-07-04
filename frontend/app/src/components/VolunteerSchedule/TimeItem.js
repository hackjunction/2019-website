import React from 'react';

const TimeItem = ({ name, date }) => {
    return (
        <div className="TimeTableGrid-item">
            {name}
            <span className="TimeTableGrid-item-date">{date}</span>
        </div>
    );
};
/*
class TimeItem extends PureComponent {
    render() {
        const { name, date } = this.props;
        return (
            <div className="TimeTableGrid-item">
                {name}
                <span className="TimeTableGrid-item-date">{date}</span>
            </div>
        );
    }
}*/

export default TimeItem;
