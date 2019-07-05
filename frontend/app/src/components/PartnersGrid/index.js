import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Image from '../Image';

import { updatePartners } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import './style.scss';

const PartnersGrid = props => {
    useEffect(() => {
        console.log('Partners rendered for the 1st time');
        props.updatePartners();
    }, []);
    const renderPartners = () => {
        return props.partners.map(partner => {
            return (
                <div className="PartnersGrid-partner">
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

export default connect(
    mapStateToProps,
    { updatePartners }
)(PartnersGrid);
