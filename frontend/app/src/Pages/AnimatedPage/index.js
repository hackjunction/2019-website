import React from 'react';
import { motion } from 'framer-motion';

export default function(ComposedComponent) {
    const AnimatedPage = props => {
        const variants = {
            hidden: {
                opacity: 0,
                y: 50
            },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5
                }
            },
            exited: {
                opacity: 0,
                transition: {
                    duration: 2
                }
            }
        };

        return (
            <motion.div initial="hidden" animate="visible" exit="exited" variants={variants}>
                <ComposedComponent {...props} />
            </motion.div>
        );
    };

    return AnimatedPage;
}
