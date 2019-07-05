import React from 'react';

const TimeItem = (
    { name, date, notLast = false, isLast = false } = this.props
) => {
    if (notLast) {
        return (
            <div className="DatesGrid-itemContainer">
                <div className="DatesGrid-itemContainer-item">
                    <span className="DatesGrid-itemContainer-item-date">
                        {date}
                    </span>
                    {name}
                </div>
                <i className="icon-down-open" />
            </div>
        );
    } else if (isLast) {
        return (
            <div className="DatesGrid-itemContainer">
                <div className="DatesGrid-itemContainer-item">
                    <span className="DatesGrid-itemContainer-item-date">
                        {date}
                    </span>
                    {name}
                </div>
            </div>
        );
    } else {
        return <h1>Error fetching dates</h1>;
    }
};

export default TimeItem;
