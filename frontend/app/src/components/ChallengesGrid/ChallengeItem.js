import React from 'react';
import styles from './ChallengeItem.module.scss';

import Image from '../Image';

const ChallengeItem = ({ title, logo, content, slug } = this.props) => {
    const inner = (
        <div className={styles.wrapper}>
            <div className={styles.logoWrapper}>
                <Image className={styles.logo} image={logo} alt="Track Partner" />
            </div>
            <div className={styles.contentWrapper}>
                <span className={styles.challengeName}>{title}</span>
                <p className={styles.challengeDescription}>{content}</p>
            </div>
        </div>
    );

    if (slug) {
        return <a href={`/challenges/${slug}`}>{inner}</a>;
    }

    return inner;
};

export default ChallengeItem;
