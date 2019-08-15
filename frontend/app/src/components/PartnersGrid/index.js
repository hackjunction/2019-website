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
                <a
                    key={partner._id}
                    href={partner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.div
                        variants={imageAnim}
                        className={
                            partner.priority === 1
                                ? 'PartnersGrid--partner__prio'
                                : 'PartnersGrid--partner'
                        }
                    >
                        <Image
                            image={partner.logo}
                            className="PartnersGrid--partner__img"
                            crop={'fill'}
                        />
                    </motion.div>
                </a>
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
            return { partners: ContentSelectors.partnersByPriority(state) };
    }
};

export default connect(mapStateToProps)(PartnersGrid);
