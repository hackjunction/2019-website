import React from 'react';
import styles from './style.module.scss';

const VerticalSection = ({ children }) => {
    return (
        <div className={styles.verticalSection}>
            <div className={styles.verticalSectionChildren}>{children}</div>
        </div>
    );
};

export default VerticalSection;
