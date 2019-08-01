import React from 'react';
import './style.scss';

import { motion } from 'framer-motion';

import Markdown from '../Markdown';

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

const BasicHeader = ({ title, body, children }) => {
    return (
        <motion.div variants={fadeIn} className="BasicHeader">
            <motion.h2 variants={slideUp} className="BasicHeader--title">
                {title}
            </motion.h2>
            <motion.div variants={slideUp} className="BasicHeader--body">
                <Markdown source={body} />
                {children}
            </motion.div>
        </motion.div>
    );
};

export default BasicHeader;
