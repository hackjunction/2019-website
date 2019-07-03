import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateVolunteerGuidelines } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import './style.scss';

const VolunteerGuidelines = props => {
    useEffect(() => {
        props.updateVolunteerGuidelines();
    }, []);

    const renderGuidelines = () => {
        return props.VolunteerGuidelines.map(guideline => {
            return (
                <div className="VolunteerGuideline">
                    <h5 className="VolunteerGuideline--title">
                        {guideline.title}
                    </h5>
                    <span className="VolunteerGuideline--content">
                        {guideline.content}
                    </span>
                </div>
            );
        });
    };
    return <div className="VolunteerGuidelines">{renderGuidelines()}</div>;
};

const mapStateToProps = state => ({
    VolunteerGuidelines: ContentSelectors.volunteerGuidelines(state)
});

export default connect(
    mapStateToProps,
    { updateVolunteerGuidelines }
)(VolunteerGuidelines);
