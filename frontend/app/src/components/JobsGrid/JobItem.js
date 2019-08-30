import React from 'react';
import styles from './style.module.scss';

import Image from '../Image';

const JobItem = (
    { title, description, endDate, link, jobskills, partner } = this.props
) => {
    const renderSkills = jobSkills => {
        return jobSkills.map(skill => (
            <div className={styles.jobSkillsBlock} key={skill.title}>
                <p className={styles.jobSkillsBlockTitle}>{skill.title}</p>
                <div className={styles.jobSkillsBlockDivider} />
            </div>
        ));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.jobItemLeft}>
                <div className={styles.logoWrapper}>
                    <Image
                        className={styles.logo}
                        image={partner.logo}
                        alt="Employer"
                    />
                </div>
                <span className={styles.lookingFor}>is looking for a</span>
                <span className={styles.title}>{title}</span>
                <div className={styles.underline} />
                <span className={styles.endsTitle}>APPLICATION ENDS</span>
                <div className={styles.endsBlock}>
                    <span className={styles.endsBlockDate}>{endDate}</span>
                </div>
            </div>
            <div className={styles.jobItemRight}>
                <h2 className={styles.skillsTitle}>SKILLS</h2>
                <div className={styles.jobSkills}>
                    {renderSkills(jobskills)}
                </div>
                <p className={styles.description}>{description}</p>
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.readmore}
                >
                    Read more
                </a>
            </div>
        </div>
    );
};
export default JobItem;
