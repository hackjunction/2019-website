import React from 'react';
import { connect } from 'react-redux';

import Image from '../Image';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import './style.scss';

const PartnersGrid = props => {
    const renderPartners = partners => {
        return partners.map(partner => {
            return (
                <div className="PartnersGrid-partner" key={partner._id}>
                    <Image
                        image={partner.logo}
                        className="PartnersGrid-partner-img"
                        width={200}
                        height={200}
                        crop={'fill'}
                    />
                </div>
            );
        });
    };

    return <div className="PartnersGrid">{renderPartners(props.partners)}</div>;
};

const mapStateToProps = (state, ownProps) => {
    const type = ownProps.type;
    switch (type) {
        case 'front':
            return {
                partners: ContentSelectors.partnersOnFrontPage(state)
            };
        default:
            return { partners: ContentSelectors.partners(state) };
    }
};

export default connect(mapStateToProps)(PartnersGrid);
