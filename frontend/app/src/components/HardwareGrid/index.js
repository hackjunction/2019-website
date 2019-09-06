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
            </div>
        ));
    };
    return (
        <div className={styles.Hardware}>{renderHardware(props.hardware)}</div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const category = ownProps.category;
    let hardware;
    switch (category) {
        case 1:
            hardware = ContentSelectors.hardwareOne(state);
            break;
        case 2:
            hardware = ContentSelectors.hardwareTwo(state);
            break;
        case 3:
            hardware = ContentSelectors.hardwareThree(state);
            break;
        default:
            ContentSelectors.hardwares(state);
    }
    return {
        hardware: hardware
    };
};

export default connect(mapStateToProps)(HardwareGrid);
