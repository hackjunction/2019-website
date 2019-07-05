import React, { useEffect } from 'react';
import './style.scss';

import { connect } from 'react-redux';
import SocialMediaIcon from './SocialmediaIcon';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';
import { updateSocialMedias } from '../../redux/dynamiccontent/actions';

const SocialMediaIcons = props => {
    useEffect(() => {
        props.updateSocialMedias();
    }, []);

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

export default connect(
    mapStateToProps,
    { updateSocialMedias }
)(SocialMediaIcons);
