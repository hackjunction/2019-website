import React from 'react';

const TimeItem = ({ name, displayDate, link } = this.props) => {
    return (
        <div className="DatesGrid--itemContainer">
            <a
                href={link}
                className="DatesGrid--itemContainer__item"
                target="_blank"
                rel="noopener noreferrer"
            >
                <span className="DatesGrid--itemContainer__item-date">
                    {displayDate}
                </span>
                <span className="DatesGrid--itemContainer__item-name">
                    {name}
                </span>
            </a>
            <i className="icon-down-open" />
        </div>
    );
};

export default TimeItem;
