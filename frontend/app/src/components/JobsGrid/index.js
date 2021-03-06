import React from 'react';
import { connect } from 'react-redux';

import JobItem from './JobItem';

import Divider from '../Divider';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

const JobsGrid = props => {
    const renderJobs = jobs => {
        return jobs.map(job => (
            <div key={job.title}>
                <JobItem {...job} />
                <Divider md />
            </div>
        ));
    };

    return <div>{renderJobs(props.jobs)}</div>;
};

const mapStateToProps = state => ({
    jobs: ContentSelectors.jobs(state)
});

export default connect(mapStateToProps)(JobsGrid);
