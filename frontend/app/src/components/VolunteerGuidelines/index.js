import React from 'react';
import { connect } from 'react-redux';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import Markdown from '../Markdown';

import './style.scss';

const VolunteerGuidelines = props => {
    const renderGuidelines = () => {
        return props.volunteerGuidelines.map(guideline => {
            return (
                <div>
                    {/* There's no reason for this to exist but for 
                    some reason needs to be here for the styling to work*/}
                    <div
                        className="VolunteerGuidelines--container"
                        key={guideline._id}
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
