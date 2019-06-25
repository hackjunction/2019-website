import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updatePartners } from '../../redux/dynamiccontent/selectors';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';
import './style.scss';

import PartnerGridItem from './PartnerGridItem';

const PartnersGrid = props => {
    useEffect(()=>{
        console.log('Partners rendered for the 1st time');
        props.updatePartners();
    }), []);
    const renderPartners = () => {
        return props.partners.map(partner => {
            return <div className="PartnersGrid-partner">{partner.logo}</div>
        })
    };
    
    return <div className="PartnersGrid">{renderPartners()}</div>
};

const mapStateToProps = state => ({
    tracks: ContentSelectors.Partners(state)
});

export default connect(
    mapStateToProps,
    { updatePartners }
)(PartnersGrid);
