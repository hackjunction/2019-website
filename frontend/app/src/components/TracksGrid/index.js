import React from 'react';
import { connect } from 'react-redux';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import ButtonLink from '../ButtonLink';

import './style.scss';

const TracksGrid = props => {
    const renderTracks = () => {
        return props.tracks.map((track, index) => {
            return (
                <div className="TracksGrid--container" key={track._id}>
                    <ButtonLink
                        text={track.name}
                        link={track.link}
                        className="TracksGrid--container__button"
                        color={index % 2 === 1 ? 'brown' : 'purple'}
                    />
                </div>
            );
        });
    };

    return <div className="TracksGrid">{renderTracks()}</div>;
};

const mapStateToProps = state => ({
    tracks: ContentSelectors.tracks(state)
});

export default connect(mapStateToProps)(TracksGrid);
