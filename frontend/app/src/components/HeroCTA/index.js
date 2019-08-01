import React from 'react';
import './style.scss';

import { motion } from 'framer-motion';

import Image from '../Image';
import Divider from '../Divider';

const slideUp = {
    initial: {
        y: 10,
        opacity: 0
    },
    visible: {
        y: 0,
        opacity: 1
    }
};

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

const HeroCTA = props => {
    return (
        <motion.div variants={fadeIn} className="HeroCTA">
            <motion.div variants={slideUp}>
                <Image className="HeroCTA--image" image={props.image} />
            </motion.div>
            <motion.span variants={slideUp} className="HeroCTA--subtitle">
                {props.subtitle}
            </motion.span>
            <Divider sm />
            <motion.span variants={slideUp} className="HeroCTA--content">
                {props.children}
            </motion.span>{' '}
        </motion.div>
    );
};

export default HeroCTA;
