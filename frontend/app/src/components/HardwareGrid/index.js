import React from 'react';
import { connect } from 'react-redux';

import styles from './style.module.scss';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

const HardwareGrid = props => {
    const renderHardware = hardware => {
        return hardware.map(h => (
            <div key={h.name} className={styles.HardwareGrid}>
                {h.link ? (
                    <a href={h.link} className={styles.HardwareGridItem}>
                        {h.name}
                    </a>
                ) : (
                    <span className={styles.HardwareGridItem}>{h.name}</span>
                )}
                {h.amount ? (
                    <span className={styles.HardwareGridAmount}>
                        (x{h.amount})
                    </span>
                ) : null}
            </div>
        ));
    };
    return (
        <div className={styles.Hardware}>{renderHardware(props.hardware)}</div>
    );
};
const mapStateToProps = state => ({
    hardware: ContentSelectors.hardwareAlphabetically(state)
});

export default connect(mapStateToProps)(HardwareGrid);
