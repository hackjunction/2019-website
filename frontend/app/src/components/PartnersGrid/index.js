import React from 'react';
import { connect } from 'react-redux';

import Image from '../Image';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import './style.scss';

const PartnersGrid = props => {
    const renderPartners = () => {
        return props.partners.map(partner => {
            return (
                <div className="PartnersGrid-partner" key={partner._id}>
                    <Image
                        image={partner.logo}
                        className="PartnersGrid-partner-img"
                    />
                </div>
            );
        });
    };

    return <div className="PartnersGrid">{renderPartners()}</div>;
};

const mapStateToProps = state => ({
    partners: ContentSelectors.partners(state)
});

export default connect(mapStateToProps)(PartnersGrid);
