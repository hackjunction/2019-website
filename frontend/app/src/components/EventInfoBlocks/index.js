import React from 'react';
import './style.scss';

import Image from '../Image';

import { connect } from 'react-redux';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

const EventInfoBlocks = props => {
    const renderBlocks = () => {
        return props.stats.map(stat => {
            return (
                <div className="EventInfoBlock" key={stat._id}>
                    <Image image={stat.logo} className="EventInfoBlock--logo" />
                    <h6 className="EventInfoBlock--name">{stat.name}</h6>
                    <span className="EventInfoBlock--content">
                        {stat.content}
                    </span>
                </div>
            );
        });
    };

    return <div className="EventInfoBlocks">{renderBlocks()}</div>;
};

const mapStateToProps = state => ({
    stats: ContentSelectors.eventInfos(state)
});

export default connect(mapStateToProps)(EventInfoBlocks);
