import React from 'react';
import styles from './style.module.scss';

import { motion } from 'framer-motion';

import Markdown from '../Markdown';
import Image from '../Image';

const fadeIn = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3
        }
    }
};

const slideUp = {
    initial: {
        opacity: 0,
        y: 10
    },
    visible: {
        opacity: 1,
        y: 0
    }
};

const BasicHeader = ({ title, body, children, image }) => {
    return (
        <motion.div variants={fadeIn} className={styles.HeaderImage}>
            <motion.div variants={slideUp} className={styles.HeaderImageImage}>
                <Image
                    image={image}
                    className={styles.HeaderImageImageImage}
                    crop="fill"
                />
            </motion.div>

            <motion.h2 variants={slideUp} className={styles.HeaderImageTitle}>
                {title}
            </motion.h2>
            <motion.div variants={slideUp} className={styles.HeaderImageBody}>
                <Markdown
                    source={body}
                    className={styles.HeaderImageBodyContent}
                />
                {children}
            </motion.div>
        </motion.div>
    );
};

export default BasicHeader;
