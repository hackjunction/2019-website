import React from 'react';
import styles from './style.module.scss';

import Markdown from '../Markdown';

const VerticalText = ({ title, content }) => {
    return (
        <div className={styles.VerticalText}>
            <span className={styles.VerticalTextTitle}>{title}</span>
            <Markdown className={styles.VerticalTextContent} source={content} />
        </div>
    );
};

export default VerticalText;