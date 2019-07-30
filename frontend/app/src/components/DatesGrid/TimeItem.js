import React from 'react';

const TimeItem = ({ name, displayDate } = this.props) => {
    return (
        <div className="DatesGrid--itemContainer">
            <div className="DatesGrid--itemContainer__item">
                <span className="DatesGrid--itemContainer__item-date">
                    {displayDate}
                </span>
                <span className="DatesGrid--itemContainer__item-name">
                    {name}
                </span>
            </div>
            <i className="icon-down-open" />
        </div>
    );
};

export default TimeItem;
