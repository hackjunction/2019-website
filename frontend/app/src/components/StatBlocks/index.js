import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

const StatBlocks = props => {
    const renderBlocks = () => {
        return props.stats.map(stat => {
            return (
                <div className="StatBlock" key={stat._id}>
                    <h6 className="StatBlock--value">{stat.value}</h6>
                    <span className="StatBlock--label">{stat.label}</span>
                </div>
            );
        });
    };

    return <div className="StatBlocks">{renderBlocks()}</div>;
};

const mapStateToProps = state => ({
    stats: ContentSelectors.stats(state)
});

export default connect(mapStateToProps)(StatBlocks);
