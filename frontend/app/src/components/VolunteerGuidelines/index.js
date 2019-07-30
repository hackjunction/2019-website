import React from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import Markdown from '../Markdown';

import './style.scss';

const VolunteerGuidelines = props => {
    const renderGuidelines = () => {
        return props.volunteerGuidelines.map(guideline => {
            return (
                <div key={guideline._id}>
                    <div
                        className="VolunteerGuidelines--container"
                       
                    >
                        <span className="VolunteerGuidelines--container__title">
                            {guideline.title}
                        </span>
                        <Markdown
                            source={guideline.content}
                            className="VolunteerGuidelines--container__content"
                        />
                    </div>
                </div>
            );
        });
    };
    return <div className="VolunteerGuidelines">{renderGuidelines()}</div>;
};

const mapStateToProps = state => ({
    volunteerGuidelines: ContentSelectors.volunteerGuidelines(state)
});

export default connect(mapStateToProps)(VolunteerGuidelines);