import React, { useEffect } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import { updateStats } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

const StatBlocks = props => {
    useEffect(() => {
        console.log('Stats rendered for the first time');
        props.updateStats();
    }, []);
    const renderBlocks = () => {
        return props.stats.map(stat => {
            return (
                <div className="StatBlock">
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

export default connect(
    mapStateToProps,
    { updateStats }
)(StatBlocks);
