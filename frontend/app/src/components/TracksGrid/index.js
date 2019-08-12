import React from 'react';
import { connect } from 'react-redux';
import snake from 'to-snake-case';

import * as ContentSelectors from '../../redux/dynamiccontent/selectors';

import ButtonLink from '../ButtonLink';

import './style.scss';

const TracksGrid = props => {
    const renderTracks = () => {
        return props.tracks.map((track, index) => {
            if (props.smoothScroll) {
                return (
                    <div className="TracksGrid--container" key={track._id}>
                        <ButtonLink
                            block
                            smooth={props.smoothScroll || false}
                            type="anchor"
                            text={track.name}
                            link={'/challenges#' + snake(track.name)}
                            className="TracksGrid--container__button"
                            color={index % 2 === 1 ? 'brown' : 'purple'}
                        />
                    </div>
                );
            } else {
                return (
                    <div className="TracksGrid--container" key={track._id}>
                        <ButtonLink
                            block
                            type="challenge"
                            text={track.name}
                            link={'/challenges#' + snake(track.name)}
                            className="TracksGrid--container__button"
                            color={index % 2 === 1 ? 'brown' : 'purple'}
                        />
                    </div>
                );
            }
        });
    };

    return <div className="TracksGrid">{renderTracks()}</div>;
};

const mapStateToProps = state => {
    return {
        tracks: ContentSelectors.tracks(state)
    };
};

export default connect(mapStateToProps)(TracksGrid);
