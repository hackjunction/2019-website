import React from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

const ScheduleItem = ({ color, name, location, starts, ends }) => {
    const dividerColor = classNames([styles[`ScheduleDivider${color}`]]);

    return (
        <div className={styles.Schedule}>
            <div className={styles.ScheduleItemLeft}>
                <span className={styles.ScheduleItemTop}>{starts}</span>
                <span className={styles.ScheduleItemBot}>{ends}</span>
            </div>
            <div className={dividerColor} />
            <div className={styles.ScheduleItemRight}>
                <span className={styles.ScheduleItemTop}>{name}</span>
                <span className={styles.ScheduleItemBot}>{location}</span>
            </div>
        </div>
    );
};

export default ScheduleItem;
