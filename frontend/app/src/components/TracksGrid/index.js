import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTracks } from '../../redux/dynamiccontent/actions';
import * as ContentSelectors from '../../redux/dynamiccontent/selectors';
import './style.scss';

const TracksGrid = props => {
    useEffect(() => {
        console.log('Rendered for the first time');
        props.updateTracks();
    }, []);
    const renderTracks = () => {
        return props.tracks.map(track => {
            return (
                <div className="TrackGridItem">
                    <button className="TrackGridItem--button">
                        {track.name}
                    </button>
                </div>
            );
        });
    };

    return <div className="TracksGrid">{renderTracks()}</div>;
};

const mapStateToProps = state => ({
    tracks: ContentSelectors.tracks(state)
});

export default connect(
    mapStateToProps,
    { updateTracks }
)(TracksGrid);
