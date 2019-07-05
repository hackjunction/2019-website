import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { updateVolunteerGuidelines } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import Markdown from '../Markdown';

import './style.scss';

const VolunteerGuidelines = props => {
    useEffect(() => {
        props.updateVolunteerGuidelines();
    }, []);

    const renderGuidelines = () => {
        return props.VolunteerGuidelines.map(guideline => {
            return (
                <div className="VolunteerGuidelines-container">
                    <div className="VolunteerGuidelines-container-guideline">
                        <span className="VolunteerGuidelines-container-guideline-title">
                            {guideline.title}
                        </span>
                        <Markdown
                            source={guideline.content}
                            className="VolunteerGuidelines-container-guideline-content"
                        />
                    </div>
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
