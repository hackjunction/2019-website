import React from 'react';
import { connect } from 'react-redux';
import { motion } from 'framer-motion';

import Image from '../Image';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import './style.scss';

const imageAnim = {
    initial: {
        scale: 0,
        opacity: 0
    },
    visible: {
        scale: 1,
        opacity: 1
    }
};

const wrapperAnim = {
    initial: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    }
};

const PartnersGrid = props => {
    const renderPartners = partners => {
        return partners.map(partner => {
            return (
                <motion.div
                    variants={imageAnim}
                    className="PartnersGrid-partner"
                    key={partner._id}
                >
                    <Image
                        image={partner.logo}
                        className="PartnersGrid-partner-img"
                        crop={'fill'}
                    />
                </motion.div>
            );
        });
    };

    return (
        <div className="PartnersGrid">
            <motion.div variants={wrapperAnim} className="PartnersGrid--inner">
                {renderPartners(props.partners)}
            </motion.div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const type = ownProps.type;
    switch (type) {
        case 'front':
            return {
                partners: ContentSelectors.partnersOnFrontPage(state)
            };
        case 'terminal':
            return {
                partners: ContentSelectors.partnersOnTerminalPage(state)
            };
        default:
            return { partners: ContentSelectors.partners(state) };
    }
};

export default connect(mapStateToProps)(PartnersGrid);
