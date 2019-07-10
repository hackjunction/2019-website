import React from 'react';
import './style.scss';

import { connect } from 'react-redux';
import SocialMediaIcon from './SocialmediaIcon';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

const SocialMediaIcons = props => {
    const renderIcons = () => {
        return props.data.map(item => {
            return (
                <SocialMediaIcon
                    key={item._id}
                    image={item.icon}
                    alt={item.name}
                    link={item.link}
                />
            );
        });
    };

    return <div className="SocialMediaIcons">{renderIcons()}</div>;
};

const mapStateToProps = state => ({
    data: ContentSelectors.socialMedias(state)
});

export default connect(mapStateToProps)(SocialMediaIcons);
